using AutoMapper;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web.Http;
using Vidly.Dtos;
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

        ////BEFORE DTO
        //// GET / api/customers
        //public IEnumerable<Customer> GetCustomers()
        //{
        //    return _context.Customers.ToList();
        //}
        //AFTER DTO
        // GET / api/customers
        [HttpGet]
        public IEnumerable<CustomerDto> GetCustomers()
        {
            return _context.Customers
                .Include(c => c.MembershipType)
                .ToList()
                .Select(Mapper.Map<Customer, CustomerDto>);
        }

        // GET /api/customers/1
        public IHttpActionResult GetCustomer(int id)
        {
            var customer = _context.Customers.SingleOrDefault(c => c.Id == id);
            if (customer == null)
                //throw new HttpResponseException(System.Net.HttpStatusCode.NotFound);
                return NotFound();

            //return Mapper.Map<Customer, CustomerDto>(customer);
            return Ok(Mapper.Map<Customer, CustomerDto>(customer));
        }

        // POST /api/customers
        [HttpPost]
        //public CustomerDto CreateCustomer(CustomerDto customerDto)
        public IHttpActionResult CreateCustomer(CustomerDto customerDto)
        {
            if (!ModelState.IsValid)
                //throw new HttpResponseException(System.Net.HttpStatusCode.BadRequest);
                return BadRequest();

            var customer = Mapper.Map<CustomerDto, Customer>(customerDto);

            _context.Customers.Add(customer);//--id will be set from the DB
            _context.SaveChanges();

            customerDto.Id = customer.Id;

            //return customerDto;
            return Created(new Uri(Request.RequestUri + "/" + customer.Id), customerDto);
        }

        //PUT /api/customers/1
        [HttpPut]
        public void UpdateCustomer(int id, CustomerDto customerDto)
        {
            if (!ModelState.IsValid)
                throw new HttpResponseException(System.Net.HttpStatusCode.BadRequest);

            var custInDb = _context.Customers.SingleOrDefault(c => c.Id == id);
            if (custInDb == null)
                throw new HttpResponseException(System.Net.HttpStatusCode.NotFound);

            Mapper.Map(customerDto, custInDb);

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
