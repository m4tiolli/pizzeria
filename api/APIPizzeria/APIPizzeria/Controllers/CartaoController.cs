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
	// [Authorize]
	public class CartaoController : Controller
    {
		//Método, rota e status
		[HttpGet]
		// [Route("List")]
		public IActionResult Listar()
		{
			CartaoDAO cartaoDAO = new CartaoDAO();
			var cartoes = cartaoDAO.Listar();

			return Ok(cartoes);
		}

		[HttpPut]
		public IActionResult Alterar(CartaoDTO cartao)
		{
			CartaoDAO dao = new CartaoDAO();
			dao.Alterar(cartao);
			return Ok();
		}

		[HttpDelete]
		public IActionResult Remover(int id)
		{
			CartaoDAO dao = new CartaoDAO();
			dao.Remover(id);
			return Ok();
		}
	}
}