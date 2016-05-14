using System.Web.Mvc;
using Arpgo.Basketball.Data;
using AutoMapper;

namespace Arpgo.Basketball.Web.Areas.Team.Controllers
{
    public class ManageController : Controller
    {
        private readonly BasketballDbContext _dbContext;
        private readonly ApplicationUserManager _userManager;
        private readonly IMapper _mapper;

        public ManageController(BasketballDbContext dbContext, ApplicationUserManager userManager, IMapper mapper)
        {
            _dbContext = dbContext;
            _userManager = userManager;
            _mapper = mapper;
        }

        // GET: Team/Manage
        public ActionResult Index()
        {
            return View();
        }
    }
}