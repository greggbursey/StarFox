using System.Collections.Generic;
using System.Web.Mvc;
using Vidly.Models;
using Vidly.ViewModels;

namespace Vidly.Controllers
{
    public class CustomersController : Controller
    {
        // GET: Customers
        //[ActionName("Index")]
        public ActionResult Index()
        {
            var customer = new Customer();
            var viewModel = new RandomMovieViewModel
            {
                Customers = customer.GetCustomers()
            };

            return View(viewModel);
        }

        public ActionResult Details(string id)
        {
            return View();
        }
    }
}