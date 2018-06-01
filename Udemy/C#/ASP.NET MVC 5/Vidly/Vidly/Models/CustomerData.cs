using System.Collections.Generic;

namespace Vidly.Models
{
    public class CustomerData
    {
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