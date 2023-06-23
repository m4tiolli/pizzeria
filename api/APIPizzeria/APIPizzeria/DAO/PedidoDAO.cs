using APIPizzeria.DTO;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIPizzeria.DAO
{
    public class PedidoDAO
    {
        public void Cadastrar(PedidoDTO pedido)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"insert into pedido values (default, @valor, @situacao);";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@valor", pedido.ValorTotal);
            comando.Parameters.AddWithValue("@situacao", pedido.Situacao);
            comando.ExecuteNonQuery();

            var idPedido = comando.LastInsertedId;
            conexao.Close();

            CadastrarItensPedido(pedido.Itens, idPedido);
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
                comando.Parameters.AddWithValue("@produto", item.ProdutoID) ;
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
