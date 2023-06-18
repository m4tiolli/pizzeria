using System.Collections.Generic;

namespace KDS_Pizzeria.DTO
{
    public class PedidoDTO
    {
        public int ID { get; set; }
        public List<ItemPedidoDTO> Itens { get; set; }
        public int ValorTotal { get; set; }
		public string Situacao { get; set; }
	}
}
