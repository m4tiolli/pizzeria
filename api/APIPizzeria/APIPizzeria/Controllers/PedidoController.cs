using APIPizzeria.DAO;
using APIPizzeria.DTO;
using Microsoft.AspNetCore.Mvc;

namespace APIPizzeria.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PedidoController : ControllerBase
    {
        [HttpGet]
        public IActionResult Listar()
        {
            PedidoDAO PedidoDAO = new PedidoDAO();
            var pedidos = PedidoDAO.Listar();

            return Ok(pedidos);
        }

        [HttpPost]
        public IActionResult Cadastrar([FromBody] PedidoDTO pedido)
        {
            PedidoDAO dao = new PedidoDAO();
            dao.Cadastrar(pedido);
            return Ok();
        }

        [HttpPut]
        [Route("Encerrar")]
        public IActionResult Encerrar(int id)
        {
            PedidoDAO dao = new PedidoDAO();
            dao.Alterar(id);
            return Ok();
        }
    }
}