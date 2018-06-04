using System;
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
            var custData = new CustomerData();
            var viewModel = new RandomMovieViewModel
            {
                Customers = custData.GetCustomers()
            };

            return View(viewModel);
        }

        public ActionResult Details(int? id)
        {
            if (!id.HasValue)
                throw new ArgumentNullException("Id cannot be null");

            var custData = new CustomerData();
            var customers = new List<Customer>();

            foreach (var cust in custData.GetCustomers())
            {
                if (cust.Id == id)
                {
                    customers.Add(cust);
                    break;
                }
            }

            var viewModel = new RandomMovieViewModel
            {
                Customers = customers
            };

            return View(viewModel);
        }
    }
}