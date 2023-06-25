using APIPizzeria.DTO;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIPizzeria.DAO
{
	public class CartaoDAO
	{
		public List<CartaoDTO> Listar()
		{
			var conexao = ConnectionFactory.Build();
			conexao.Open();

			var query = "SELECT * FROM cartoes;";

			MySqlCommand comando = new MySqlCommand(query, conexao);
			var dataReader = comando.ExecuteReader();

			var cartoes = new List<CartaoDTO>();

			while (dataReader.Read())
			{
				var cartao = new CartaoDTO();

				cartao.ID = int.Parse(dataReader["id"].ToString());
				cartao.IDUsuario = int.Parse(dataReader["id_usuario"].ToString());
				cartao.Numero = dataReader["numero"].ToString();
				cartao.Nome = dataReader["nome"].ToString();
				cartao.CVC = dataReader["cvc"].ToString();
				cartao.DataValidade = DateTime.Parse(dataReader["datavalidade"].ToString());
				cartao.Tipo = dataReader["tipo"].ToString();

				cartoes.Add(cartao);
			}
			conexao.Close();
			return cartoes;
		}

		public void Cadastrar(CartaoDTO cartao)
		{
			var conexao = ConnectionFactory.Build();
			conexao.Open();

			var query = @"INSERT INTO cartoes (id_usuario, nome, numero, cvc, datavalidade, tipo) VALUES
						(@id_usuario,@nome,@numero,@cvc,@imagem,@tipo)";

			var comando = new MySqlCommand(query, conexao);
			comando.Parameters.AddWithValue("@id_usuario", cartao.IDUsuario);
			comando.Parameters.AddWithValue("@nome", cartao.Nome);
			comando.Parameters.AddWithValue("@numero", cartao.Numero);
			comando.Parameters.AddWithValue("@cvc", cartao.CVC);
			comando.Parameters.AddWithValue("@datavalidade", cartao.DataValidade);
			comando.Parameters.AddWithValue("@tipo", cartao.Tipo);

			comando.ExecuteNonQuery();
			conexao.Close();
		}

		public void Alterar(CartaoDTO cartao)
		{
			var conexao = ConnectionFactory.Build();
			conexao.Open();

			var query = @"UPDATE cartoes SET id_usuario = @id_usuario, nome = @nome, numero = @numero, cvc = @cvc, 
						datavalidade = @datavalidade, tipo = @tipo WHERE id = @id";

			var comando = new MySqlCommand(query, conexao);
			comando.Parameters.AddWithValue("@id_usuario", cartao.IDUsuario);
			comando.Parameters.AddWithValue("@nome", cartao.Nome);
			comando.Parameters.AddWithValue("@numero", cartao.Numero);
			comando.Parameters.AddWithValue("@cvc", cartao.CVC);
			comando.Parameters.AddWithValue("@datavalidade", cartao.DataValidade);
			comando.Parameters.AddWithValue("@tipo", cartao.Tipo);

			comando.ExecuteNonQuery();
			conexao.Close();
		}

		public void Remover(int id)
		{
			var conexao = ConnectionFactory.Build();
			conexao.Open();

			var query = @"DELETE FROM cartoes WHERE id = @id";

			var comando = new MySqlCommand(query, conexao);
			comando.Parameters.AddWithValue("@id", id);

			comando.ExecuteNonQuery();
			conexao.Close();
		}
	}
}
