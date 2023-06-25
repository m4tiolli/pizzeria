using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIPizzeria.DTO
{
	public class EnderecoDTO
	{
		public int ID { get; set; }
		public int IDUsuario { get; set; }
		public string UF { get; set; }
		public string Cidade { get; set; }
		public string Bairro { get; set; }
		public string Rua { get; set; }
		public string NumCasa { get; set; }
		public string CEP { get; set; }
	}
}
