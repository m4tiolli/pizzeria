using MySql.Data.MySqlClient;

namespace api.DAO
{
    public class ConnectionFactory
    {
        public static MySqlConnection Build()
        {
            string connectionString = "Server=localhost; Database=pizzeria; Uid=root; Pwd=;";
            return new MySqlConnection(connectionString);
        }
    }
}
