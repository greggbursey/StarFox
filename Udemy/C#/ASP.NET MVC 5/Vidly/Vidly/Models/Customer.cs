using System;
using System.ComponentModel.DataAnnotations;

namespace Vidly.Models
{
    public class Customer
    {
        public int Id { get; set; }

        // Data annotations
        [Required]// makes column name NOT null-able
        [StringLength(255)]// overriding the default convention
        public string Name { get; set; }
        public bool IsSubscribedToNewsLetter { get; set; }
        public MembershipType MembershipType { get; set; }
        
        [Display(Name = "Membership Type")]
        public byte MembershipTypeID { get; set; }//entity framework recognizes this convention and treats this property as a foreign key

        [Display(Name = "Date of Birth")]
        public DateTime? Birthday { get; set; }
    }
}