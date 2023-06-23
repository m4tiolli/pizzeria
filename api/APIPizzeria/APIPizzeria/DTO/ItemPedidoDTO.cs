namespace APIPizzeria.DTO
{
    public class ItemPedidoDTO
    {
        public int ID { get; set; }
        public int ProdutoID { get; set; }
        public string Nome { get; set; }
        public string Observacao { get; set; }
        public decimal Valor { get; set; }
        public int Quantidade { get; set; }
    }
}
