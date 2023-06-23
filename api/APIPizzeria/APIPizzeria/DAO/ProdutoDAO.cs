using APIPizzeria.DTO;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIPizzeria.DAO
{
    public class ProdutoDAO
    {
        public List<ProdutoDTO> Listar()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT * FROM produto;";

            MySqlCommand comando = new MySqlCommand(query, conexao);
            var dataReader = comando.ExecuteReader();

            var produtos = new List<ProdutoDTO>();

            while (dataReader.Read())
            {
                var produto = new ProdutoDTO();

                produto.ID = int.Parse(dataReader["id"].ToString());
                produto.Nome = dataReader["nome"].ToString();
                produto.Descricao = dataReader["descricao"].ToString();
                produto.Valor = Decimal.Parse(dataReader["valor"].ToString());
                produto.Imagem = dataReader["imagem"].ToString();
                produto.Tipo = dataReader["tipo"].ToString();

                produtos.Add(produto);
            }
            conexao.Close();
            return produtos;
        }

        public void Cadastrar(ProdutoDTO produto)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"INSERT INTO produto (nome, descricao, valor, imagem, tipo) VALUES
						(@nome,@descricao,@valor,@imagem,@tipo)";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@nome", produto.Nome);
            comando.Parameters.AddWithValue("@descricao", produto.Descricao);
            comando.Parameters.AddWithValue("@valor", produto.Valor);
            comando.Parameters.AddWithValue("@imagem", produto.Imagem);
            comando.Parameters.AddWithValue("@tipo", produto.Tipo);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

        public void Alterar(ProdutoDTO produto)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"UPDATE produto SET nome = @nome, descricao = @descricao, valor = @valor, imagem = @imagem, tipo = @tipo WHERE id = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", produto.ID);
            comando.Parameters.AddWithValue("@nome", produto.Nome);
            comando.Parameters.AddWithValue("@descricao", produto.Descricao);
            comando.Parameters.AddWithValue("@valor", produto.Valor);
            comando.Parameters.AddWithValue("@imagem", produto.Imagem);
            comando.Parameters.AddWithValue("@tipo", produto.Tipo);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

        public void Remover(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"DELETE FROM produto WHERE id = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);

            comando.ExecuteNonQuery();
            conexao.Close();
        }
    }
}
