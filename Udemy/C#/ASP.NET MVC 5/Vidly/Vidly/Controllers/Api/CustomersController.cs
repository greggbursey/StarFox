using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Vidly.Models;

namespace Vidly.Controllers.Api
{
    public class CustomersController : ApiController
    {
        private ApplicationDbContext _context;

        public CustomersController()
        {
            _context = new ApplicationDbContext();
        }

        // GET / api/customers
        public IEnumerable<Customer> GetCustomers()
        {
            return _context.Customers.ToList();
        }

        // GET /api/customers/1
        public Customer GetCustomer(int id)
        {
            var customer = _context.Customers.SingleOrDefault(c => c.Id == id);
            if (customer == null)
                throw new HttpResponseException(System.Net.HttpStatusCode.NotFound);

            return customer;
        }

        // POST /api/customers
        [HttpPost]
        public Customer CreateCustomer(Customer customer)
        {
            if (!ModelState.IsValid)
                throw new HttpResponseException(System.Net.HttpStatusCode.BadRequest);

            _context.Customers.Add(customer);

            _context.SaveChanges();

            return customer;//--id will be set from the DB
        }

        //PUT /api/customers/1
        [HttpPut]
        public void UpdateCustomer(int id, Customer customer)
        {
            if (!ModelState.IsValid)
                throw new HttpResponseException(System.Net.HttpStatusCode.BadRequest);

            var custInDb = _context.Customers.SingleOrDefault(c => c.Id == id);
            if (custInDb == null)
                throw new HttpResponseException(System.Net.HttpStatusCode.NotFound);

            custInDb.Name = customer.Name;
            custInDb.Birthday = customer.Birthday;
            custInDb.IsSubscribedToNewsLetter = customer.IsSubscribedToNewsLetter;
            custInDb.MembershipTypeID = customer.MembershipTypeID;

            _context.SaveChanges();
        }

        //DELETE /api/customers/1
        [HttpDelete]
        public void DeleteCustomer(int id)
        {
            var custInDb = _context.Customers.SingleOrDefault(c => c.Id == id);
            if (custInDb == null)
                throw new HttpResponseException(System.Net.HttpStatusCode.NotFound);

            _context.Customers.Remove(custInDb);
            _context.SaveChanges();
        }
    }
}
