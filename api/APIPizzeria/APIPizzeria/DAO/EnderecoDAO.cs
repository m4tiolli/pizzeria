using APIPizzeria.DTO;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIPizzeria.DAO
{
	public class EnderecoDAO
	{
		public List<EnderecoDTO> ListarPorID(int id)
		{
			var Conexao = ConnectionFactory.Build();
			Conexao.Open();

			var query = "SELECT * FROM enderecos WHERE idusuario = @idusuario";
			var comando = new MySqlCommand(query, Conexao);

			comando.Parameters.AddWithValue("@idusuario", id);
			comando.ExecuteNonQuery();

			MySqlDataReader reader = comando.ExecuteReader();
			var Lista = new List<EnderecoDTO>();

			while( reader.Read() == true )
			{
				var endereco = new EnderecoDTO();
				endereco.ID = int.Parse(reader["idendereco"].ToString());
				endereco.IDUsuario = int.Parse(reader["idusuario"].ToString());
				endereco.UF = reader["uf"].ToString();
				endereco.Cidade = reader["cidade"].ToString();
				endereco.Bairro = reader["bairro"].ToString();
				endereco.Rua = reader["rua"].ToString();
				endereco.NumCasa = reader["numcasa"].ToString();
				endereco.CEP = reader["cep"].ToString();
				Lista.Add(endereco);
			}
			Conexao.Close();
			return Lista;
		}	

		public EnderecoDTO ListarPorIDUnico(int id)
		{
			var conexao = ConnectionFactory.Build();
			conexao.Open();

			var query = "SELECT * FROM enderecos WHERE idendereco = @id;";

			MySqlCommand comando = new MySqlCommand(query, conexao);
			comando.Parameters.AddWithValue("@id", id);
			var dataReader = comando.ExecuteReader();

			var endereco = new EnderecoDTO();

			while (dataReader.Read())
			{

				endereco.ID = int.Parse(dataReader["idendereco"].ToString());
				endereco.IDUsuario = int.Parse(dataReader["idusuario"].ToString());
				endereco.UF = dataReader["uf"].ToString();
				endereco.Cidade = dataReader["cidade"].ToString();
				endereco.Bairro = dataReader["bairro"].ToString();
				endereco.Rua = dataReader["rua"].ToString();
				endereco.NumCasa = dataReader["numcasa"].ToString();
				endereco.CEP = dataReader["cep"].ToString();

			}
			conexao.Close();
			return endereco;
		}


		public void Cadastrar(EnderecoDTO enderecos)
		{
			try
			{
				var conexao = ConnectionFactory.Build();
				conexao.Open();

				var query = @"INSERT INTO enderecos (idusuario, uf, cidade, bairro, rua, numCasa, cep) VALUES
						(@idusuario,@uf,@cidade,@bairro,@rua,@numCasa,@cep)";

				var comando = new MySqlCommand(query, conexao);
				comando.Parameters.AddWithValue("@idusuario", enderecos.IDUsuario);
				comando.Parameters.AddWithValue("@uf", enderecos.UF);
				comando.Parameters.AddWithValue("@cidade", enderecos.Cidade);
				comando.Parameters.AddWithValue("@bairro", enderecos.Bairro);
				comando.Parameters.AddWithValue("@rua", enderecos.Rua);
				comando.Parameters.AddWithValue("@numCasa", enderecos.NumCasa);
				comando.Parameters.AddWithValue("@cep", enderecos.CEP);
				comando.ExecuteNonQuery();
				conexao.Close();
			}
			catch (Exception)
			{

				throw;
			}
		}

		public void Alterar(EnderecoDTO enderecos)
		{
			try
			{
				var conexao = ConnectionFactory.Build();
				conexao.Open();

				var query = @"UPDATE enderecos SET uf = @uf, cidade = @cidade, bairro = @bairro, rua = @rua, numCasa = @numCasa WHERE idendereco = @idendereco";

				var comando = new MySqlCommand(query, conexao);
				comando.Parameters.AddWithValue("@idendereco", enderecos.ID);
				comando.Parameters.AddWithValue("@uf", enderecos.UF);
				comando.Parameters.AddWithValue("@cidade", enderecos.Cidade);
				comando.Parameters.AddWithValue("@bairro", enderecos.Bairro);
				comando.Parameters.AddWithValue("@rua", enderecos.Rua);
				comando.Parameters.AddWithValue("@numCasa", enderecos.NumCasa);

				comando.ExecuteNonQuery();
				conexao.Close();
			}
			catch (Exception)
			{

				throw;
			}
		}

		public void Remover(int id)
		{
			var conexao = ConnectionFactory.Build();
			conexao.Open();

			var query = @"DELETE FROM enderecos WHERE id = @id";

			var comando = new MySqlCommand(query, conexao);
			comando.Parameters.AddWithValue("@id", id);

			comando.ExecuteNonQuery();
			conexao.Close();
		}
	}
}
