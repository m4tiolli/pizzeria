using api.DTO;
using MySql.Data.MySqlClient;

namespace api.DAO
{
    public class UserDAO
    {
        public List<UserDTO> ListUser()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();
            var query = "SELECT nome, email, senha FROM usuario";
            var comando = new MySqlCommand(query, conexao);
            var dataReader = comando.ExecuteReader();
            var ListUser = new List<UserDTO>();

            while (dataReader.Read())
            {
                var user = new UserDTO();
                user.nome = dataReader["nome"].ToString();
                user.email = dataReader["email"].ToString();
                user.password = dataReader["senha"].ToString();

                ListUser.Add(user);
            }
            conexao.Close();
            return ListUser;
        }
    }
}
