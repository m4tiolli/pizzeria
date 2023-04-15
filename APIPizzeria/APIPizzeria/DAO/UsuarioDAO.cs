﻿using APIPizzeria.DTO;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIPizzeria.DAO
{
    public class UsuarioDAO
    {
        public List<UsuarioDTO> Listar()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT * FROM usuario;";

            MySqlCommand comando = new MySqlCommand(query, conexao);
            var dataReader = comando.ExecuteReader();

            var users = new List<UsuarioDTO>();

            while (dataReader.Read())
            {
                var user = new UsuarioDTO();

                user.ID = int.Parse(dataReader["id"].ToString());
                user.Nome = dataReader["nome"].ToString();
                user.CPF = dataReader["cpf"].ToString();
                user.DataNasc = DateTime.Parse(dataReader["dataNasc"].ToString());
                user.Telefone = dataReader["telefone"].ToString();
                user.Email = dataReader["email"].ToString();
                user.Senha = dataReader["senha"].ToString();
                user.Tipo = dataReader["tipo"].ToString();

                users.Add(user);
            }
            conexao.Close();
            return users;
        }

        public void Cadastrar(UsuarioDTO user)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"INSERT INTO usuario (nome, cpf, dataNasc, telefone, email, senha, tipo) VALUES
						(@nome,@cpf,@dataNasc,@telefone,@email,@senha,@tipo)";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@nome", user.Nome);
            comando.Parameters.AddWithValue("@cpf", user.CPF);
            comando.Parameters.AddWithValue("@dataNasc", user.DataNasc);
            comando.Parameters.AddWithValue("@telefone", user.Telefone);
            comando.Parameters.AddWithValue("@email", user.Email);
            comando.Parameters.AddWithValue("@senha", user.Senha);
            comando.Parameters.AddWithValue("@tipo", user.Tipo);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

        public void Alterar(UsuarioDTO user)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"UPDATE usuario SET nome = @nome, cpf = @cpf, dataNasc = @dataNasc, telefone = @telefone, email = @email, senha = 
                            @senha, tipo = @tipo WHERE id = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", user.ID);
            comando.Parameters.AddWithValue("@nome", user.Nome);
            comando.Parameters.AddWithValue("@cpf", user.CPF);
            comando.Parameters.AddWithValue("@dataNasc", user.DataNasc);
            comando.Parameters.AddWithValue("@telefone", user.Telefone);
            comando.Parameters.AddWithValue("@email", user.Email);
            comando.Parameters.AddWithValue("@senha", user.Senha);
            comando.Parameters.AddWithValue("@tipo", user.Tipo);

            comando.ExecuteNonQuery();
            conexao.Close();
        }

        public void Remover(int id)
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = @"DELETE FROM usuario WHERE id = @id";

            var comando = new MySqlCommand(query, conexao);
            comando.Parameters.AddWithValue("@id", id);

            comando.ExecuteNonQuery();
            conexao.Close();
        }
    }
}