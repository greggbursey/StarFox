using System;
using System.Linq;
using System.Web.Mvc;
using Vidly.Models;
using Vidly.ViewModels;

namespace Vidly.Controllers
{
    public class MoviesController : Controller
    {
        private ApplicationDbContext _context;

        public MoviesController()
        {
            _context = new ApplicationDbContext();
        }

        protected override void Dispose(bool disposing)
        {
            _context.Dispose();
        }

        // GET: Movies
        public ActionResult Random()
        {
            var movies = _context.Movies.ToList();
            var random = new Random();
            var randomIndex = random.Next(0, movies.Count - 1);

            var viewModel = new RandomMovieViewModel
            {
                Movie = movies[randomIndex],
                Customers = _context.Customers
            };

            //ViewData["Movie"] = movie;//--not great
            //ViewBag.Movie = movie;//--don't get compile time checks

            ////this is what @Model is by default, so this is not needed
            //var viewResult = new ViewResult();
            //viewResult.ViewData.Model = movie;

            //return View(movie);
            return View(viewModel);
        }

        public ActionResult Blah(int id)
        {
            return Content("id = " + id);
        }

        public ActionResult Index(int? pageIndex, string sortBy)
        {
            if (!pageIndex.HasValue)
                pageIndex = 1;
            if (string.IsNullOrWhiteSpace(sortBy))
                sortBy = "Name";

            return Content(string.Format("pageIndex={0}&sortBy={1}", pageIndex, sortBy));
        }

        //this [Route()] attribute allows for a custom route to be placed here instead of routeconfig.cs
        //the regex part allows for constraints
        [Route("movies/released/{year:regex(\\d{4})}/{month:regex(\\d{2}):range(1, 12)}")]
        public ActionResult ByReleaseDate(int year, byte month)
        {
            return Content(year + "/" + month);
        }
    }
}