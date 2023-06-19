﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIPizzeria.DTO
{
	public class CartaoDTO
	{
		public int ID { get; set; }
		public int IDUsuario { get; set; }
		public string Nome { get; set; }
		public string Numero { get; set; }
		public string CVC { get; set; }
		public DateTime DataValidade { get; set; }
		public string Tipo { get; set; }
	}
}
