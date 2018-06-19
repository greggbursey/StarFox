using System;
using Vidly.Models;

namespace Vidly.Dtos
{
    public class MovieDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public Genre Genre { get; set; }
                
        public byte GenreID { get; set; }
                
        public DateTime ReleaseDate { get; set; }
                
        public DateTime DateAdded { get; set; }
                
        public int NumberInStock { get; set; }
    }
}