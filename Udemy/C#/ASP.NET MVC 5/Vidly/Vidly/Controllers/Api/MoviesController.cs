using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Vidly.Dtos;
using Vidly.Models;

namespace Vidly.Controllers.Api
{
    public class MoviesController : ApiController
    {
        private ApplicationDbContext _context;

        public MoviesController()
        {
            _context = new ApplicationDbContext();
        }

        ////BEFORE DTO
        //// GET / api/Movies
        //public IEnumerable<movie> GetMovies()
        //{
        //    return _context.Movies.ToList();
        //}
        //AFTER DTO
        // GET / api/Movies
        [HttpGet]
        public IEnumerable<MovieDto> GetMovies()
        {
            return _context.Movies.ToList()
                .Select(Mapper.Map<Movie, MovieDto>);
        }

        // GET /api/Movies/1
        public IHttpActionResult GetMovie(int id)
        {
            var movie = _context.Movies.SingleOrDefault(c => c.Id == id);
            if (movie == null)
                //throw new HttpResponseException(System.Net.HttpStatusCode.NotFound);
                return NotFound();

            //return Mapper.Map<movie, MovieDto>(movie);
            return Ok(Mapper.Map<Movie, MovieDto>(movie));
        }

        // POST /api/Movies
        [HttpPost]
        //public MovieDto Createmovie(MovieDto MovieDto)
        public IHttpActionResult CreateMovie(MovieDto MovieDto)
        {
            if (!ModelState.IsValid)
                //throw new HttpResponseException(System.Net.HttpStatusCode.BadRequest);
                return BadRequest();

            var movie = Mapper.Map<MovieDto, Movie>(MovieDto);

            _context.Movies.Add(movie);//--id will be set from the DB
            _context.SaveChanges();

            MovieDto.Id = movie.Id;

            //return MovieDto;
            return Created(new Uri(Request.RequestUri + "/" + movie.Id), MovieDto);
        }

        //PUT /api/Movies/1
        [HttpPut]
        public void Updatemovie(int id, MovieDto MovieDto)
        {
            if (!ModelState.IsValid)
                throw new HttpResponseException(System.Net.HttpStatusCode.BadRequest);

            var movieInDb = _context.Movies.SingleOrDefault(c => c.Id == id);
            if (movieInDb == null)
                throw new HttpResponseException(System.Net.HttpStatusCode.NotFound);

            Mapper.Map(MovieDto, movieInDb);

            _context.SaveChanges();
        }

        //DELETE /api/Movies/1
        [HttpDelete]
        public void Deletemovie(int id)
        {
            var movieInDb = _context.Movies.SingleOrDefault(c => c.Id == id);
            if (movieInDb == null)
                throw new HttpResponseException(System.Net.HttpStatusCode.NotFound);

            _context.Movies.Remove(movieInDb);
            _context.SaveChanges();
        }
    }
}
