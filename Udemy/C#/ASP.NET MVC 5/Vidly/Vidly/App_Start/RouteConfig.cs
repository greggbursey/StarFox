using System.Web.Mvc;
using System.Web.Routing;

namespace Vidly
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapMvcAttributeRoutes();//allows for custom routes

            ////Define routes from most specific to most generic
            //routes.MapRoute(
            //    "MoviesReleaseDate",
            //    "movies/released/{year}/{month}",
            //    new { controller = "Movies", action = "ByReleaseDate" },
            //    //new { year = @"\d{4}", month = @"\d{2}" }//enforce that year must be 4 digits, month must be 2 digits
            //    new { year = @"2015|2016", month = @"\d{2}" }//enforce that year must be either 2015 or 2016
            //    );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
