﻿namespace Vidly.Models
{
    public class MembershipType
    {
        public byte Id { get; set; }
        public short SignUpFee { get; set; }
        public byte DurationInMonths { get; set; }
        public byte DiscountRate { get; set; }
        public string Name
        {
            get; set;//now we can just retrieve it form the DB instead of setting it in code
            //get
            //{
            //    switch (DurationInMonths)
            //    {
            //        case (byte)Enums.MembershipType.PayAsYouGo:
            //            return "Pay as you go";

            //        case (byte)Enums.MembershipType.Monthly:
            //            return "Monthly";

            //        case (byte)Enums.MembershipType.Quarterly:
            //            return "Quarterly";

            //        case (byte)Enums.MembershipType.Yearly:
            //            return "Yearly";
            //    }
            //    return null;
            //}
        }
        public static readonly byte Unknown = 0;
    }
}