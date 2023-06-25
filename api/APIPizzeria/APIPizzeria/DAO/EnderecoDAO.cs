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
		public EnderecoDTO ListarPorID(int id)
		{
			var Conexao = ConnectionFactory.Build();
			Conexao.Open();

			var query = "SELECT * FROM enderecos WHERE idusuario = @idusuario";
			var comando = new MySqlCommand(query, Conexao);

			comando.Parameters.AddWithValue("@idusuario", id);

			var reader = comando.ExecuteReader();
			var endereco = new EnderecoDTO();

			while( reader.Read() )
			{
				endereco.ID = int.Parse(reader["id"].ToString());
				endereco.IDUsuario = int.Parse(reader["idusuario"].ToString());
				endereco.UF = reader["uf"].ToString();
				endereco.Cidade = reader["cidade"].ToString();
				endereco.Bairro = reader["bairro"].ToString();
				endereco.Rua = reader["rua"].ToString();
				endereco.NumCasa = reader["numcasa"].ToString();
				endereco.CEP = reader["cep"].ToString();
			}
			Conexao.Close();
			return endereco;
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
