using System;
using System.ComponentModel.DataAnnotations;

namespace Vidly.Models
{
    public class Customer
    {
        public int Id { get; set; }

        // Data annotations
        [Required(ErrorMessage = "Please enter customer's name")]// shows up in the error validation in HTML
        //[Required]// makes column name NOT null-able
        [StringLength(255)]// overriding the default convention
        public string Name { get; set; }
        public bool IsSubscribedToNewsLetter { get; set; }
        public MembershipType MembershipType { get; set; }
        
        [Display(Name = "Membership Type")]
        // implicitly required....if byte? - then it would not be required
        public byte MembershipTypeID { get; set; }//entity framework recognizes this convention and treats this property as a foreign key

        [Display(Name = "Date of Birth")]
        [MembershipValidation]
        public DateTime? Birthday { get; set; }
    }
}