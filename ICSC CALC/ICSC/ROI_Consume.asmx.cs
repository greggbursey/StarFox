using Buxton.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Web;
using System.Web.Services;
using ORA = Oracle.DataAccess.Client;

namespace ICSC
{
    /// <summary>
    /// Summary description for ROI_Consume
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
     [System.Web.Script.Services.ScriptService]
    public class ROI_Consume : System.Web.Services.WebService
    {

        [WebMethod]        
        public string Capture(ROI roi, ROIResult result)
        {
            EmailConfiguration config = new EmailConfiguration();
            //config.ToEmail = "newlogosales@buxtonco.com";
            config.ToEmail = "gbursey@buxtonco.com";

            SmtpClient client = new SmtpClient(config.ServerDomainName, config.PortNumber);
            client.DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network;
            client.UseDefaultCredentials = config.UseDefaultCredentials;
            //client.Credentials = new NetworkCredential("BUXSVCNEX", "Buxton!");
            if (!config.UseDefaultCredentials)
            {
                client.Credentials = new NetworkCredential("noreply@buxtonco.com", "oyVGNcm1");
            }
            client.EnableSsl = config.UseSSL;

            MailMessage message = new System.Net.Mail.MailMessage(config.FromEmail, config.ToEmail);
            if (!String.IsNullOrEmpty(roi.EmailAddress))
            {
                message.To.Add(roi.EmailAddress);
            }
            //message.Bcc.Add("dtrowbridge@buxtonco.com");
            message.Bcc.Add("jbursey@buxtonco.com");
            //message.Bcc.Add("pcrow@buxtonco.com");
            //message.Bcc.Add("bpurdy@buxtonco.com");
            //message.Bcc.Add("sfoley@buxtonco.com");
            //message.Bcc.Add("cdaniel@buxtonco.com");
            //message.Bcc.Add("twalls@buxtonco.com");
            message.IsBodyHtml = true;
            message.Subject = "ICSC Value Calculator - " + roi.CompanyName;
            message.Body = CreateHTML(roi, result);

            client.Send(message);

            return "ok";
        }

        private string CreateHTML(ROI roi, ROIResult result)
        {
            StringBuilder sb = new StringBuilder();

            sb.Append("<table align='center' style='border: 1px solid #333;'>");
            sb.AppendLine("<tr><td colspan='3'><img src='http://scout.buxtonco.com/images/logo_icsc_2015.png' /></td><td colspan='2' style='background-color: #437d6f; color: #FFFFFF; padding: 10px;'>Value Calculator Results</td><tr>");
            sb.AppendLine("<tr style='font-weight: bold;'>");
            sb.AppendFormat("<td colspan='5'>Thank you {0}, ", roi.CompanyName);
            sb.AppendLine("</tr>");
            sb.AppendLine("<tr>");
            sb.AppendFormat("<td colspan='5'>&nbsp;</td>");
            sb.AppendLine("</tr>");
            sb.AppendLine("<tr>");
            sb.AppendFormat("<td colspan='4'>Location Count:</td><td>{0}</td>", roi.LocationCount);
            sb.AppendLine("</tr>");
            sb.AppendLine("<tr>");
            sb.AppendFormat("<td colspan='4'>Location Open Next Year Count:</td><td>{0}</td>", roi.LocationOpenCount);
            sb.AppendLine("</tr>");
            sb.AppendLine("<tr>");
            sb.AppendFormat("<td colspan='4'>Revenue Per Store:</td><td>{0}</td>", roi.RevenueAmount.ToString("C"));
            sb.AppendLine("</tr>");
            sb.AppendLine("<tr>");
            sb.AppendFormat("<td colspan='4'>First Year Revenue Per Store:</td><td>{0}</td>", roi.FirstYearRevenueAmount.ToString("C"));
            sb.AppendLine("</tr>");
            sb.AppendLine("<tr>");
            sb.AppendFormat("<td colspan='4'>Average Investment Per Location:</td><td>{0}</td>", roi.InvestmentAmount.ToString("C"));
            sb.AppendLine("</tr>");
            sb.AppendLine("<tr>");
            sb.AppendFormat("<td colspan='5'>&nbsp;</td>");
            sb.AppendLine("</tr>");
            sb.AppendLine("<tr style='border: 1px solid #333;'>");
            sb.AppendFormat("<td colspan='5'>RESULTS</td>");
            sb.AppendLine("</tr>");
            sb.AppendLine("<tr>");
            sb.AppendFormat("<td colspan='4'><span style='font-size: 8px; font-style: italic; color: #CC0000;'>*1</span>Your Estimated Increase in 1st Yr Sales: </td><td style='text-align: right; color: #80b052;'>{0}</td>", result.FirstYearTotalIncrease.ToString("C"));
            sb.AppendLine("</tr>");
            sb.AppendLine("<tr>");
            sb.AppendFormat("<td colspan='4'><span style='font-size: 8px; font-style: italic; color: #CC0000;'>*2</span>Your Estimated Increase in Comp Sales: </td><td style='text-align: right; color: #80b052;'>{0}</td>", result.CompSalesTotal.ToString("C"));
            sb.AppendLine("</tr>");
            sb.AppendLine("<tr>");
            sb.AppendFormat("<td colspan='4'><span style='font-size: 8px; font-style: italic; color: #CC0000;'>*3</span>Your Savings From Avoiding Opening Below Average Stores: </td><td style='text-align: right; color: #80b052;'>{0}</td>", result.ClientTotalSavingsBelowAverage.ToString("C"));
            sb.AppendLine("</tr>");
            sb.AppendLine("<tr>");
            sb.AppendFormat("<td colspan='4'><span style='font-size: 8px; font-style: italic; color: #CC0000;'>*4</span>Your Expected Increase in Store Openings Beyond Current Pace: </td><td style='text-align: right; color: #80b052;'>{0}</td>", result.PaceIncrease);
            sb.AppendLine("</tr>");
            sb.AppendLine("<tr>");
            sb.AppendFormat("<td colspan='5'>&nbsp;</td>");
            sb.AppendLine("</tr>");
            sb.AppendLine("<tr>");
            sb.AppendFormat("<td colspan='5'>Visit us at <a href='http://www.buxtonco.com'>http://www.buxtonco.com</a> .</td>");
            sb.AppendLine("</tr>");
            sb.AppendLine("<tr>");
            sb.AppendFormat("<td colspan='5'>&nbsp;</td>");
            sb.AppendLine("</tr>");
            sb.AppendLine("<tr>");
            sb.AppendFormat("<td colspan='5'>");
            sb.AppendLine("<ul>");
            sb.AppendLine("<li><p style='font-style: initial; font-size: 10px;'>Based on average Buxton client results.  Actual results vary by client. Not a guarantee of success. </p></li>");
            sb.AppendLine(@"<li>    
                            <p style='font-style: initial; font-size: 10px;'>
                                *&nbsp;Buxton client data was utilized 12 months beyond the last date of the contract period to calculate the annualized increase.
                            </p>
                        </li>");
            sb.AppendLine(@"<li>    
                            <p style='font-style: initial; font-size: 10px;'>
                                *&nbsp;1) Based on comparison of stores open in the last year of the initial Buxton contract year compared to stores open prior to the Buxton contract date.  
                            </p>
                        </li>");
            sb.AppendLine(@"<li>    
                               <p style='font-style: initial; font-size: 10px;'>
                                *&nbsp;2) Based on comparison of sales in the final contract year above established trends.
                            </p>
                        </li>");
            sb.AppendLine(@"<li>    
                                 <p style='font-style: initial; font-size: 10px;'>
                                *&nbsp;3) Based on reduction in the number of locations performing below average.  *Average is calculated  at the time of contract execution.  
                            </p>
                        </li>");
            sb.AppendLine(@"<li>    
                              <p style='font-style: initial; font-size: 10px;'>
                                *&nbsp;4)  Based on comparison of average annual number of new locations opened at the end of the contract compared to prior to the contract.  
                            </p>
                        </li>");
            sb.AppendLine("</ul>");
            sb.AppendLine("</td>");
            sb.AppendLine("</tr>");
            sb.Append("</table>");

            return sb.ToString();
        }

    }
}
