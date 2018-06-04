using System.Data.Entity;
using Vidly.Models;

namespace Vidly.ViewModels
{
    public class RandomMovieViewModel
    {
        public Movie Movie { get; set; }
        public DbSet<Customer> Customers { get; set; }
    }
}