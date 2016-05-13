using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AutoMapper;
using FmaBasketball.Data;
using Microsoft.AspNet.Identity;

namespace FmaBasketball.Web.Areas.Team.Controllers
{
    public class ManageController : Controller
    {
        private readonly FmaBasketballDbContext _dbContext;
        private readonly ApplicationUserManager _userManager;
        private readonly IMapper _mapper;

        public ManageController(FmaBasketballDbContext dbContext, ApplicationUserManager userManager, IMapper mapper)
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