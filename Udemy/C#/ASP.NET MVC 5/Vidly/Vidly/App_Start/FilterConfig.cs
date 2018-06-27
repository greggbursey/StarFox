using System.Web.Mvc;

namespace Vidly
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            //--global application - will apply to all controllers and actions unless [AllowAnonymous] is used
            filters.Add(new AuthorizeAttribute());
            // end points will no longer be available on an HTTP channel
            filters.Add(new RequireHttpsAttribute());
        }
    }
}
