using APIPizzeria.DTO;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIPizzeria.DAO
{
    public class PizzaDAO
    {
        public List<PizzaDTO> Listar()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT * FROM produtoCad;";

            MySqlCommand comando = new MySqlCommand(query, conexao);
            var dataReader = comando.ExecuteReader();

            var pizzas = new List<PizzaDTO>();

            while (dataReader.Read())
            {
                var pizza = new PizzaDTO();

                pizza.ID = int.Parse(dataReader["id"].ToString());
                pizza.Nome = dataReader["nome"].ToString();
                pizza.Descricao = dataReader["descricao"].ToString();
                pizza.Preco = Decimal.Parse(dataReader["preco"].ToString());
                pizza.Imagem = dataReader["imagem"].ToString();
                pizza.Tipo = dataReader["tipo"].ToString();

                pizzas.Add(pizza);
            }
            conexao.Close();
            return pizzas;
        }

        public void Cadastrar(PizzaDTO pizza)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"INSERT INTO produtoCad (nome, descricao, preco, imagem, tipo) VALUES
						(@nome,@descricao,@preco,@imagem,@tipo)";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@nome", pizza.Nome);
            comando.Parameters.AddWithValue("@descricao", pizza.Descricao);
            comando.Parameters.AddWithValue("@preco", pizza.Preco);
            comando.Parameters.AddWithValue("@imagem", pizza.Imagem);
            comando.Parameters.AddWithValue("@tipo", pizza.Tipo);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

        public void Alterar(PizzaDTO pizza)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"UPDATE produtoCad SET nome = @nome, descricao = @descricao, preco = @preco, imagem = @imagem, tipo = @tipo WHERE id = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", pizza.ID);
            comando.Parameters.AddWithValue("@nome", pizza.Nome);
            comando.Parameters.AddWithValue("@descricao", pizza.Descricao);
            comando.Parameters.AddWithValue("@preco", pizza.Preco);
            comando.Parameters.AddWithValue("@imagem", pizza.Imagem);
            comando.Parameters.AddWithValue("@tipo", pizza.Tipo);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

        public void Remover(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"DELETE FROM produtoCad WHERE id = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);

            comando.ExecuteNonQuery();
            conexao.Close();
        }
    }
}