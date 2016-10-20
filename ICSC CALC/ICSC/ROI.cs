using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ICSC
{
    public class ROI
    {
        public ROI()
        {

        }

        public string CompanyName { get; set; }
        public string EmailAddress { get; set; }
        public int LocationCount { get; set; }
        public int LocationOpenCount { get; set; }
        public double RevenueAmount { get; set; }
        public double FirstYearRevenueAmount { get; set; }
        public double InvestmentAmount { get; set; }
    }
}