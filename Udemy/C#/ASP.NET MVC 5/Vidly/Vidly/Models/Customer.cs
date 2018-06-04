namespace Vidly.Models
{
    public class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsSubscribedToNewsLetter { get; set; }
        public MembershipType MembershipType { get; set; }
        //entity framework recognizes this convention and treats this property as a foriegn key
        public byte MembershipTypeID { get; set; }
    }
}