using APIPizzeria.DTO;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIPizzeria.DAO
{
    public class MesaDAO
    {
        public List<MesaDTO> Listar()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT * FROM mesa;";

            MySqlCommand comando = new MySqlCommand(query, conexao);
            var dataReader = comando.ExecuteReader();

            var mesas = new List<MesaDTO>();

            while (dataReader.Read())
            {
                var mesa = new MesaDTO();

                mesa.ID = int.Parse(dataReader["id"].ToString());
                mesa.Numero = int.Parse(dataReader["numero"].ToString());

                mesas.Add(mesa);
            }
            conexao.Close();
            return mesas;
        }

        public void Cadastrar(MesaDTO mesa)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"INSERT INTO mesa (numero) VALUES
						(@numero)";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@numero", mesa.Numero);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

        public void Alterar(MesaDTO mesa)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"UPDATE mesa SET numero = @numero";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", mesa.ID);
            comando.Parameters.AddWithValue("@nome", mesa.Numero);
           

            comando.ExecuteNonQuery();
            conexao.Close();
        }

        public void Remover(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"DELETE FROM mesa WHERE id = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);

            comando.ExecuteNonQuery();
            conexao.Close();
        }
    }
}
