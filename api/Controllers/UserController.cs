using api.DAO;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        [HttpGet]
        public IActionResult ListUser()
        {
            UserDAO userDAO = new UserDAO();
            var users = userDAO.ListUser();
            return Ok(users);
        }

        [HttpPost]

        public IActionResult Register()
        {

        }
    }
}
