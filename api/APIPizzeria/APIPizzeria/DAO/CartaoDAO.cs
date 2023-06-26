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
		public List<CartaoDTO> ListarPorID(int id)
		{
			var conexao = ConnectionFactory.Build();
			conexao.Open();

			var query = "SELECT * FROM cartoes WHERE id_usuario = @idusuario;";
			var comando = new MySqlCommand(query, conexao);

			comando.Parameters.AddWithValue("@idusuario", id);
			comando.ExecuteNonQuery();

			MySqlDataReader reader = comando.ExecuteReader();
			var Lista = new List<CartaoDTO>();

			while (reader.Read() == true)
			{
				var cartao = new CartaoDTO();
				cartao.ID = int.Parse(reader["id"].ToString());
				cartao.ID_Usuario = int.Parse(reader["id_usuario"].ToString());
				cartao.Numero = reader["numero"].ToString();
				cartao.Nome = reader["nome"].ToString();
				cartao.CVC = reader["cvc"].ToString();
				cartao.DataValidade = reader["datavalidade"].ToString();
				cartao.Tipo = reader["tipo"].ToString();
				Lista.Add(cartao);
			}
			conexao.Close();
			return Lista;
		}

		public CartaoDTO ListarPorIDUnico(int id)
		{
			var conexao = ConnectionFactory.Build();
			conexao.Open();

			var query = "SELECT * FROM cartoes WHERE id = @id;";

			MySqlCommand comando = new MySqlCommand(query, conexao);
			comando.Parameters.AddWithValue("@id", id);
			var dataReader = comando.ExecuteReader();

			var cartao = new CartaoDTO();

			while (dataReader.Read())
			{
				cartao.ID = int.Parse(dataReader["id"].ToString());
				cartao.ID_Usuario = int.Parse(dataReader["id_usuario"].ToString());
				cartao.Numero = dataReader["numero"].ToString();
				cartao.Nome = dataReader["nome"].ToString();
				cartao.CVC = dataReader["cvc"].ToString();
				cartao.DataValidade = dataReader["datavalidade"].ToString();
				cartao.Tipo = dataReader["tipo"].ToString();
			}
			conexao.Close();
			return cartao;
		}

		public void Cadastrar(CartaoDTO cartao)
		{
			var conexao = ConnectionFactory.Build();
			conexao.Open();

			var query = @"INSERT INTO cartoes (id_usuario, nome, numero, cvc, datavalidade, tipo) VALUES
						(@id_usuario,@nome,@numero,@cvc,@datavalidade,@tipo)";

			var comando = new MySqlCommand(query, conexao);
			comando.Parameters.AddWithValue("@id_usuario", cartao.ID_Usuario);
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
			comando.Parameters.AddWithValue("@id_usuario", cartao.ID_Usuario);
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
