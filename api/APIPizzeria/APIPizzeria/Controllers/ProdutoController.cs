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
    public class ProdutoController : Controller
    {
        //Método, rota e status
        [HttpGet]
        // [Route("List")]
        public IActionResult Listar()
        {
            ProdutoDAO ProdutoDAO = new ProdutoDAO();
            var produtos = ProdutoDAO.Listar();

            return Ok(produtos);
        }
        [HttpPost]
        public IActionResult Cadastrar([FromBody] ProdutoDTO produto)
        {
            ProdutoDAO dao = new ProdutoDAO();
            dao.Cadastrar(produto);
            return Ok();
        }

        [HttpPut]
        public IActionResult Alterar(ProdutoDTO Produto)
        {
            ProdutoDAO dao = new ProdutoDAO();
            dao.Alterar(Produto);
            return Ok();
        }

        [HttpDelete]
        public IActionResult Remover(int id)
        {
            ProdutoDAO dao = new ProdutoDAO();
            dao.Remover(id);
            return Ok();
        }
       
    }
}