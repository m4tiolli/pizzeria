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
    public class PizzaController : Controller
    {
        //Método, rota e status
        [HttpGet]
        // [Route("List")]
        public IActionResult Listar()
        {
            PizzaDAO PizzaDAO = new PizzaDAO();
            var pizzas = PizzaDAO.Listar();

            return Ok(pizzas);
        }
        [HttpPost]
        public IActionResult Cadastrar([FromBody] PizzaDTO pizza)
        {
            PizzaDAO dao = new PizzaDAO();
            dao.Cadastrar(pizza);
            return Ok();
        }

        [HttpPut]
        public IActionResult Alterar(PizzaDTO pizza)
        {
            PizzaDAO dao = new PizzaDAO();
            dao.Alterar(pizza);
            return Ok();
        }

        [HttpDelete]
        public IActionResult Remover(int id)
        {
            PizzaDAO dao = new PizzaDAO();
            dao.Remover(id);
            return Ok();
        }
    }
}