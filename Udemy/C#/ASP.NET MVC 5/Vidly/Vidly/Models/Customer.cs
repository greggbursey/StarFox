using System.ComponentModel.DataAnnotations;

namespace Vidly.Models
{
    public class Customer
    {
        public int Id { get; set; }

        // Data annotations
        // makes column name NOT nullable
        [Required]
        // overriding the default convention
        [StringLength(255)]
        public string Name { get; set; }
        public bool IsSubscribedToNewsLetter { get; set; }
        public MembershipType MembershipType { get; set; }
        //entity framework recognizes this convention and treats this property as a foreign key
        public byte MembershipTypeID { get; set; }
    }
}