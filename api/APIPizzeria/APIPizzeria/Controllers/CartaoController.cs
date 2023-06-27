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
		[Route("listarcartoes")]
		public IActionResult Listar(int id)
		{
			CartaoDAO cartaoDAO = new CartaoDAO();
			var cartoes = cartaoDAO.ListarPorID(id);

			return Ok(cartoes);
		}

		[HttpGet]
		[Route("{id}")]
		public IActionResult ListarPorID(int id)
		{
			CartaoDAO cartaoDAO = new CartaoDAO();
			var cartoes = cartaoDAO.ListarPorIDUnico(id);

			return Ok(cartoes);
		}

		[HttpPost]
		public IActionResult Cadastrar([FromBody] CartaoDTO cartao)
		{
			CartaoDAO dao = new CartaoDAO();
			dao.Cadastrar(cartao);
			return Ok(dao);
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