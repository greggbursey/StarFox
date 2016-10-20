using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ICSC
{
    public class ROIResult
    {
        public ROIResult()
        {

        }

        public double FirstYearPercentage { get; set; }
        public double FirstYearIncreasePerStore { get; set; }
        public double FirstYearTotalIncrease { get; set; }

        public double CompSalesTrend { get; set; }
        public double CompSalesIncrease { get; set; }
        public double CompSalesTotal { get; set; }

        public double ClientDecreaseAverage { get; set; }
        public double ClientAvoidedLocationsBelowAverage { get; set; }
        public double ClientTotalSavingsBelowAverage { get; set; }

        public double PacePercentage { get; set; }
        public double PaceIncrease { get; set; }
    }
}