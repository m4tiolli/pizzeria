using System.Collections.Generic;

namespace APIPizzeria.DTO
{
    public class PedidoDTO
    {
        public int ID { get; set; }
        public List<ItemPedidoDTO> Itens { get; set; }
        public int ValorTotal { get; set; }
        public string Situacao { get; set; }
        public string Tipo { get; set; }
        public EnderecoDTO Endereco { get; set; }
    }
}
