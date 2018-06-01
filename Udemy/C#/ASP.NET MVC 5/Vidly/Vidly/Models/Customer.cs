using System.Collections.Generic;

namespace Vidly.Models
{
    public class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        private List<Customer> _customers
        {
            get
            {
                return new List<Customer>
                {
                    new Customer { Name = "John Smith", Id = 1 },
                    new Customer { Name = "Mary Williams", Id = 2 }
                };
            }
        }

        public List<Customer> GetCustomers()
        {
            return _customers;
        }
    }
}