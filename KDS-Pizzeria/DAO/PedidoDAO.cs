using MySql.Data.MySqlClient;
using KDS_Pizzeria.DTO;
using System.Collections.Generic;

namespace KDS_Pizzeria.DAO
{
    internal class PedidoDAO
    {
        public List<PedidoDTO> ListarPedidos()
        {
            var conexao = new MySqlConnection("Server=pizzeria.mysql.database.azure.com;Database=pizzeria;Uid=matiolli;Pwd=01100111gA@;");
            conexao.Open();

            var query = @"SELECT PP.pedido, PP.produto, PROD.nome, PP.quantidade, PP.observacao, PED.situacao
							FROM ProdutosPedido PP
							INNER JOIN produto PROD ON PP.produto = PROD.id
							INNER JOIN pedido PED ON PP.pedido = PED.id
							WHERE PED.situacao = 'aberto';"; 

            var comando = new MySqlCommand(query, conexao);
            var dataReader = comando.ExecuteReader();

            var pedidos = new List<PedidoDTO>();

            while (dataReader.Read())
            {
                var idPedido = int.Parse(dataReader["Pedido"].ToString());
                var idProduto = int.Parse(dataReader["Produto"].ToString());
                var nomeProduto = dataReader["Nome"].ToString();
                var observacaoProduto = dataReader["Observacao"].ToString();
                var qtd = int.Parse(dataReader["Quantidade"].ToString());

                var indexPedido = pedidos.FindIndex(p => p.ID == idPedido);
                if (indexPedido == -1)
                {
                    var pedido = new PedidoDTO();
                    pedido.ID = idPedido;
                    pedido.Itens = new List<ItemPedidoDTO>();

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
    }
}
