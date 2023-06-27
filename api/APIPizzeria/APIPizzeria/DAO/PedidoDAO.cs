using APIPizzeria.DTO;
using MySql.Data.MySqlClient;
using System.Collections.Generic;

namespace APIPizzeria.DAO
{
    public class PedidoDAO
    {
        public List<PedidoDTO> Listar()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"SELECT PP.pedido, PP.produto, PROD.nome, PP.quantidade, PP.observacao, PED.situacao, PED.tipo, 
                            end.rua, end.numcasa, end.bairro, end.cidade, end.cep
                            FROM ProdutosPedido PP
                            INNER JOIN produto PROD ON PP.produto = PROD.id
                            INNER JOIN pedido PED ON PP.pedido = PED.id
                            LEFT JOIN enderecos END on PED.enderecoid = END.idendereco
                            WHERE PED.situacao = 'aberto'; ";

            MySqlCommand comando = new MySqlCommand(query, conexao);
            var dataReader = comando.ExecuteReader();

            var pedidos = new List<PedidoDTO>();

            while (dataReader.Read())
            {

                var idPedido = int.Parse(dataReader["Pedido"].ToString());
                var idProduto = int.Parse(dataReader["Produto"].ToString());
                var nomeProduto = dataReader["Nome"].ToString();
                var observacaoProduto = dataReader["Observacao"].ToString();
                var qtd = int.Parse(dataReader["Quantidade"].ToString());
                var tipo = dataReader["Tipo"].ToString();

                var endereco = new EnderecoDTO()
                {
                    Rua = dataReader["rua"].ToString(),
                    NumCasa = dataReader["numcasa"].ToString(),
                    Bairro = dataReader["bairro"].ToString(),
                    Cidade = dataReader["cidade"].ToString(),
                    CEP = dataReader["cep"].ToString(),
                };

                var indexPedido = pedidos.FindIndex(p => p.ID == idPedido);
                if (indexPedido == -1)
                {
                    var pedido = new PedidoDTO();
                    pedido.ID = idPedido;
                    pedido.Tipo = tipo;
                    pedido.Itens = new List<ItemPedidoDTO>();
                    pedido.Endereco = endereco;

                    var produtosPedido = new ItemPedidoDTO()
                    {
                        Nome = nomeProduto,
                        Quantidade = qtd,
                        Observacao = observacaoProduto
                    };
                    pedido.Itens.Add(produtosPedido);
                    pedidos.Add(pedido);
                }
                else
                {
                    var produtosPedido = new ItemPedidoDTO()
                    {
                        Nome = nomeProduto,
                        Quantidade = qtd
                    };
                    pedidos[indexPedido].Itens.Add(produtosPedido);
                }
            }
            conexao.Close();
            return pedidos;
        }
        public void Cadastrar(PedidoDTO pedido)
        {
            try
            {
                var conexao = ConnectionFactory.Build();
                conexao.Open();

                var query = @"insert into pedido values (default, @valor, @situacao, @tipo, @endereco);";

                var comando = new MySqlCommand(query, conexao);
                comando.Parameters.AddWithValue("@valor", pedido.ValorTotal);
                comando.Parameters.AddWithValue("@situacao", pedido.Situacao);
                comando.Parameters.AddWithValue("@tipo", pedido.Tipo);

                if (pedido.Endereco is null)
                {
                    comando.Parameters.AddWithValue("@endereco", 0);
                }
                else
                {
                    comando.Parameters.AddWithValue("@endereco", pedido.Endereco.ID);
                }


                comando.ExecuteNonQuery();

                var idPedido = comando.LastInsertedId;
                conexao.Close();

                CadastrarItensPedido(pedido.Itens, idPedido);
            }
            catch (System.Exception)
            {

                throw;
            }
        }

        private void CadastrarItensPedido(List<ItemPedidoDTO> items, long idPedido)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            foreach (var item in items)
            {
                var query = @"insert into ProdutosPedido values (@produto, @pedido, @quantidade,
                @valor, @obs);";

                var comando = new MySqlCommand(query, conexao);
                comando.Parameters.AddWithValue("@pedido", idPedido);
                comando.Parameters.AddWithValue("@produto", item.ProdutoID);
                comando.Parameters.AddWithValue("@quantidade", item.Quantidade);
                comando.Parameters.AddWithValue("@valor", item.Valor);
                comando.Parameters.AddWithValue("@obs", item.Observacao);
                comando.ExecuteNonQuery();
            }

            conexao.Close();
        }

        public void Alterar(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"update pedido set situacao='encerrado' where id = @id;";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);

            comando.ExecuteNonQuery();
            conexao.Close();
        }
    }
}