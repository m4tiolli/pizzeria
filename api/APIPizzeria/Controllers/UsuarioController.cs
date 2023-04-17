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
    public class UsuarioController : Controller
    {
        //Método, rota e status
        [HttpGet]
        // [Route("List")]
        public IActionResult Listar()
        {
            UsuarioDAO usuarioDAO = new UsuarioDAO();
            var users = usuarioDAO.Listar();

            return Ok(users);
        }
        [HttpPost]
        public IActionResult Cadastrar([FromBody] UsuarioDTO user)
        {
            UsuarioDAO dao = new UsuarioDAO();
            dao.Cadastrar(user);
            return Ok();
        }

        [HttpPut]
        public IActionResult Alterar(UsuarioDTO user)
        {
            UsuarioDAO dao = new UsuarioDAO();
            dao.Alterar(user);
            return Ok();
        }

        [HttpDelete]
        public IActionResult Remover(int id)
        {
            UsuarioDAO dao = new UsuarioDAO();
            dao.Remover(id);
            return Ok();
        }
    }
}