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
		public List<EnderecoDTO> Listar(int idusuario)
		{
			var conexao = ConnectionFactory.Build();
			conexao.Open();

			var query = "SELECT * FROM enderecos WHERE idusuario = @idusuario;";

			MySqlCommand comando = new MySqlCommand(query, conexao);
			comando.Parameters.AddWithValue("@idusuario", idusuario);
			var dataReader = comando.ExecuteReader();

			

			var enderecoss = new List<EnderecoDTO>();

			while (dataReader.Read())
			{
				var enderecos = new EnderecoDTO();

				enderecos.ID = int.Parse(dataReader["id"].ToString());
				enderecos.IDUsuario = int.Parse(dataReader["idusuario"].ToString());
				enderecos.UF = dataReader["uf"].ToString();
				enderecos.Cidade = dataReader["cidade"].ToString();
				enderecos.Bairro = dataReader["bairro"].ToString();
				enderecos.Rua = dataReader["rua"].ToString();
				enderecos.NumCasa = dataReader["numCasa"].ToString();
				enderecos.CEP = dataReader["cep"].ToString();

				enderecoss.Add(enderecos);
			}
			conexao.Close();
			return enderecoss;
		}

		public void Cadastrar(EnderecoDTO enderecos)
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

			comando.ExecuteNonQuery();
			conexao.Close();
		}

		public void Alterar(EnderecoDTO enderecos)
		{
			var conexao = ConnectionFactory.Build();
			conexao.Open();

			var query = @"UPDATE enderecos SET idusuario = @idusuario, uf = @uf, cidade = @cidade, bairro = @bairro, rua = @rua, numCasa = @numCasa WHERE id = @id";

			var comando = new MySqlCommand(query, conexao);
			comando.Parameters.AddWithValue("@idusuario", enderecos.IDUsuario);
			comando.Parameters.AddWithValue("@uf", enderecos.UF);
			comando.Parameters.AddWithValue("@cidade", enderecos.Cidade);
			comando.Parameters.AddWithValue("@bairro", enderecos.Bairro);
			comando.Parameters.AddWithValue("@rua", enderecos.Rua);
			comando.Parameters.AddWithValue("@numCasa", enderecos.NumCasa);

			comando.ExecuteNonQuery();
			conexao.Close();
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
