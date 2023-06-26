using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using APIPizzeria.DAO;
using APIPizzeria.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace APIPizzeria.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class AuthController : ControllerBase
	{

		[HttpPost]
		[Route("Login")]
		public IActionResult Login([FromForm] UsuarioDTO usuario)
		{
			var dao = new UsuarioDAO();
			var usuarioLogado = dao.Login(usuario);

			if (usuarioLogado.ID == 0)
			{
				return NotFound("Usuário e/ou senha inválidos");
			}

			var token = GenerateJwtToken(usuarioLogado, "PU8a9W4sv2opkqlOwmgsn3w3Innlc4D5");
			return Ok(new { token });
		}

		[HttpPost]
		[Route("Cadastrar")]
		public IActionResult Cadastrar([FromBody] UsuarioDTO user)
		{
			UsuarioDAO dao = new UsuarioDAO();
			dao.Cadastrar(user);
			return Ok();
		}

		string GenerateJwtToken(UsuarioDTO usuario, string secretKey)
		{
			var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
			var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

			var claims = new List<Claim>
			{
				new Claim("ID", usuario.ID.ToString()),
				new Claim("Nome", usuario.Nome),
				new Claim("Email", usuario.Email),
				new Claim("CPF", usuario.CPF),
				new Claim("IDEndereço", usuario.IDEndereco.ToString())
			};

			var token = new JwtSecurityToken(
				"APIUsuarios",
				"APIUsuarios",
				claims,
				expires: DateTime.UtcNow.AddMinutes(2),
				signingCredentials: credentials
			);

			return new JwtSecurityTokenHandler().WriteToken(token);
		}
	}
}