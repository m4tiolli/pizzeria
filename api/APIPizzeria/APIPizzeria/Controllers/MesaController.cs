using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIPizzeria.DAO;
using APIPizzeria.DTO;
using Microsoft.AspNetCore.Mvc;

namespace APIPizzeria.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MesaController : Controller
    {
            //Método, rota e status
            [HttpGet]
            // [Route("List")]
            public IActionResult Listar()
            {
                MesaDAO PizzaDAO = new MesaDAO();
                var pizzas = PizzaDAO.Listar();

                return Ok(pizzas);
            }
            [HttpPost]
            public IActionResult Cadastrar([FromBody] MesaDTO pizza)
            {
                MesaDAO dao = new MesaDAO();
                dao.Cadastrar(pizza);
                return Ok();
            }

            [HttpPut]
            public IActionResult Alterar(MesaDTO pizza)
            {
                MesaDAO dao = new MesaDAO();
                dao.Alterar(pizza);
                return Ok();
            }

            [HttpDelete]
            public IActionResult Remover(int id)
            {
                MesaDAO dao = new MesaDAO();
                dao.Remover(id);
                return Ok();
            }
    }
}