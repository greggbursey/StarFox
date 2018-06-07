using System;
using System.ComponentModel.DataAnnotations;
using Vidly.Models;

namespace Vidly.Dtos
{
    public class CustomerDto
    {
        public int Id { get; set; }

        // Data annotations
        [Required(ErrorMessage = "Please enter customer's name")]// shows up in the error validation in HTML
        //[Required]// makes column name NOT null-able
        [StringLength(255)]// overriding the default convention
        public string Name { get; set; }
        public bool IsSubscribedToNewsLetter { get; set; }

        public byte MembershipTypeID { get; set; }

        [MembershipValidation]
        public DateTime? Birthday { get; set; }
    }
}