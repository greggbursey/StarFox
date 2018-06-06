using System;
using System.Linq;
using System.Web.Mvc;
using Vidly.Models;
using Vidly.ViewModels;
using System.Data.Entity;
using System.Data.Entity.Validation;

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

        //public ActionResult Index(int? pageIndex, string sortBy)
        //{
        //    if (!pageIndex.HasValue)
        //        pageIndex = 1;
        //    if (string.IsNullOrWhiteSpace(sortBy))
        //        sortBy = "Name";

        //    return Content(string.Format("pageIndex={0}&sortBy={1}", pageIndex, sortBy));
        //}

        public ActionResult Index()
        {
            var movies = _context.Movies
                .Include(m => m.Genre)//entity framework does not include sub-members by default, using .Include makes it do that
                .ToList();//immediately executes the query

            return View(movies);
        }

        //this [Route()] attribute allows for a custom route to be placed here instead of routeconfig.cs
        //the regex part allows for constraints
        [Route("movies/released/{year:regex(\\d{4})}/{month:regex(\\d{2}):range(1, 12)}")]
        public ActionResult ByReleaseDate(int year, byte month)
        {
            return Content(year + "/" + month);
        }

        public ActionResult Details(int id)
        {
            var movie = _context.Movies
                .Include(m => m.Genre)
                .SingleOrDefault(m => m.Id == id);

            if (movie == null)
                return HttpNotFound();

            return View(movie);
        }

        public ActionResult Edit(int id)
        {
            var movie = _context.Movies.SingleOrDefault(m => m.Id == id);
            if (movie == null)
                return HttpNotFound();

            var viewModel = new MovieFormViewModel
            {
                Movie = movie,
                Genres = _context.Genres.ToList()
            };

            return View("MovieForm", viewModel);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Save(Movie movie)
        {
            if (!ModelState.IsValid)
            {
                var viewModel = new MovieFormViewModel
                {
                    Movie = movie,
                    Genres = _context.Genres.ToList()
                };
                return View("MovieForm", viewModel);
            }

            if (movie.Id == 0)
            {
                _context.Movies.Add(movie);
            }
            else
            {
                var movieInDb = _context.Movies.Single(c => c.Id == movie.Id);

                /*
                 * opens up security holes in the app - meaning, they could even update the ID - malicious users
                 * not easy to refactor
                 * the 3rd argument (the magic strings) are 'white listing' the properties to be updated
                 */
                //TryUpdateModel(customerInDb, "", new string[] { "Name", "Email" });

                movieInDb.Name = movie.Name;
                movieInDb.DateAdded = movie.DateAdded;
                movieInDb.ReleaseDate = movie.ReleaseDate;
                movieInDb.NumberInStock = movie.NumberInStock;
                movieInDb.GenreID = movie.GenreID;
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
            return RedirectToAction("Index", "Movies");
        }

        public ActionResult New()
        {
            var membershipTypes = _context.MembershipTypes.ToList();
            var vm = new MovieFormViewModel
            {
                Movie = new Movie(),
                Genres = _context.Genres.ToList()
            };

            return View("MovieForm", vm);
        }
    }
}