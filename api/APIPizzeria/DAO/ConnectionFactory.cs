using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIPizzeria.DAO
{
    public class ConnectionFactory
    {
        public static MySqlConnection Build()
        {
            return new MySqlConnection("Server=pizzeria.mysql.database.azure.com;Database=pizzeria;Uid=matiolli;Pwd=01100111gA@;");
		}
    }
}
