using System;
using System.Data.Entity;
using System.Linq;
using System.Web.Mvc;
using Vidly.Models;

namespace Vidly.Controllers
{
    public class CustomersController : Controller
    {
        private ApplicationDbContext _context;

        public CustomersController()
        {
            _context = new ApplicationDbContext();
        }

        protected override void Dispose(bool disposing)
        {
            _context.Dispose();
        }

        public ViewResult Index()
        {
            //var customers = _context.Customers;// DB will not be queried until it is iterated over (like we are doing in the view)
            var customers = _context.Customers
                .Include(c => c.MembershipType)//entity framework does not include sub-members by default, using .Include makes it do that
                .ToList();//immediately executes the query

            return View(customers);
        }

        //// GET: Customers
        ////[ActionName("Index")]
        //public ActionResult Index()
        //{
        //    var custData = new CustomerData();
        //    var viewModel = new RandomMovieViewModel
        //    {
        //        Customers = custData.GetCustomers()
        //    };

        //    return View(viewModel);
        //}

        public ActionResult Details(int? id)
        {
            if (!id.HasValue)
                throw new ArgumentNullException("Id cannot be null");

            var customer = _context.Customers
                .Include(c => c.MembershipType)//entity framework does not include sub-members by default, using .Include makes it do that
                .SingleOrDefault(c => c.Id == id);

            if (customer == null)
                return HttpNotFound();

            return View(customer);
        }
    }
}