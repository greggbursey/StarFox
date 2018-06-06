using System;
using System.ComponentModel.DataAnnotations;

namespace Vidly.Models
{
    public class Movie
    {
        public Movie()
        {
            DateAdded = DateTime.Now;
            ReleaseDate = DateTime.Now;
        }
        public int Id { get; set; }

        [Required(ErrorMessage = "Please enter movie's name")]
        public string Name { get; set; }
                
        public Genre Genre { get; set; }

        [Display(Name = "Genre Type")]
        [Required(ErrorMessage = "The genre field is required")]
        public byte GenreID { get; set; }

        [Required(ErrorMessage = "The release date field is required")]
        [Display(Name = "Release Date")]
        public DateTime ReleaseDate { get; set; }

        [Required(ErrorMessage = "The date added field is required")]
        [Display(Name = "Date Added")]
        public DateTime DateAdded { get; set; }

        [Range(1, 20, ErrorMessage = "Number in stock must be between 1 and 20")]
        [Display(Name = "Number In Stock")]
        public int NumberInStock { get; set; }
    }
}