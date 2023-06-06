using APIPizzeria.DTO;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIPizzeria.DAO
{
    public class EconomiaDAO
    {
        public List<EconomiaDTO> Listar()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT * FROM economia;";

            MySqlCommand comando = new MySqlCommand(query, conexao);
            var dataReader = comando.ExecuteReader();

            var economias = new List<EconomiaDTO>();

            while (dataReader.Read())
            {
                var economia = new EconomiaDTO();

                economia.ID = int.Parse(dataReader["id"].ToString());
                economia.Entradas = double.Parse(dataReader["entradas"].ToString());
                economia.Saidas = double.Parse(dataReader["saidas"].ToString());

                economias.Add(economia);
            }
            conexao.Close();
            return economias;
        }

        public void Cadastrar(EconomiaDTO economia)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"INSERT INTO economia (entradas, saidas) VALUES (@entradas, @saidas)";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@entradas", economia.Entradas);
            comando.Parameters.AddWithValue("@saidas", economia.Saidas);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

        public void Remover(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"DELETE FROM economia WHERE id = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);

            comando.ExecuteNonQuery();
            conexao.Close();
        }
    }
}
