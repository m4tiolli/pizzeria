using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIPizzeria.DAO;
using APIPizzeria.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace APIPizzeria.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	// [Authorize]
	public class EnderecoController : Controller
    {
			//Método, rota e status
			[HttpGet]
			// [Route("List")]
			public IActionResult Listar(int idusuario)
			{
				EnderecoDAO EnderecoDAO = new EnderecoDAO();
				var enderecos = EnderecoDAO.Listar(idusuario);

				return Ok(enderecos);
			}
			[HttpPost]
			public IActionResult Cadastrar([FromBody] EnderecoDTO endereco)
			{
				EnderecoDAO dao = new EnderecoDAO();
				dao.Cadastrar(endereco);
				return Ok();
			}

			[HttpPut]
			public IActionResult Alterar(EnderecoDTO endereco)
			{
				EnderecoDAO dao = new EnderecoDAO();
				dao.Alterar(endereco);
				return Ok();
			}

			[HttpDelete]
			public IActionResult Remover(int id)
			{
				EnderecoDAO dao = new EnderecoDAO();
				dao.Remover(id);
				return Ok();
			}
		}
}