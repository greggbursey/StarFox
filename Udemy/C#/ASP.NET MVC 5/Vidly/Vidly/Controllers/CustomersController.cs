using System;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;
using System.Web.Mvc;
using Vidly.Models;
using Vidly.ViewModels;

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

        [HttpPost]
        public ActionResult Save(Customer customer)
        {
            if (!ModelState.IsValid)
            {
                var viewModel = new CustomerFormViewModel
                {
                    Customer = customer,
                    MembershipTypes = _context.MembershipTypes.ToList()
                };
                return View("CustomerForm", viewModel);
            }

            if (customer.Id == 0)
            {
                _context.Customers.Add(customer);
            }
            else
            {
                var customerInDb = _context.Customers.Single(c => c.Id == customer.Id);

                /*
                 * opens up security holes in the app - meaning, they could even update the ID - malicious users
                 * not easy to refactor
                 * the 3rd argument (the magic strings) are 'white listing' the properties to be updated
                 */
                //TryUpdateModel(customerInDb, "", new string[] { "Name", "Email" });

                customerInDb.Name = customer.Name;
                customerInDb.Birthday = customer.Birthday;
                customerInDb.MembershipTypeID = customer.MembershipTypeID;
                customerInDb.IsSubscribedToNewsLetter = customer.IsSubscribedToNewsLetter;
            }
            try
            {
                _context.SaveChanges();
            }
            catch (DbEntityValidationException e)
            {
                Console.WriteLine(e);
            }

            //return View();
            return RedirectToAction("Index", "Customers");
        }

        public ActionResult New()
        {
            var membershipTypes = _context.MembershipTypes.ToList();
            var vm = new CustomerFormViewModel
            {
                Customer = new Customer(),// initialize properties - ex. Id will be initialized to 0
                MembershipTypes = membershipTypes
            };

            return View("CustomerForm", vm);
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

        public ActionResult Details(int id)
        {
            var customer = _context.Customers
                .Include(c => c.MembershipType)//entity framework does not include sub-members by default, using .Include makes it do that
                .SingleOrDefault(c => c.Id == id);

            if (customer == null)
                return HttpNotFound();

            return View(customer);
        }

        public ActionResult Edit(int id)
        {
            var customer = _context.Customers.SingleOrDefault(c => c.Id == id);
            if (customer == null)
                return HttpNotFound();

            var viewModel = new CustomerFormViewModel
            {
                Customer = customer,
                MembershipTypes = _context.MembershipTypes.ToList()
            };

            return View("CustomerForm", viewModel);
        }
    }
}