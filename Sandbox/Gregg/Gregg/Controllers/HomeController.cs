using System.Collections.Generic;
using System.Web.Mvc;
using ReactDemo.Models;
using System.Web.UI;
using System;

namespace ReactDemo.Controllers
{
    public class HomeController : Controller
    {
        private static readonly IList<CommentModel> _comments;
        //--
        static HomeController()
        {
            _comments = new List<CommentModel>
                {
                    new CommentModel
                    {
                        Id = 1,
                        Author = "Daniel Lo Nigro",
                        Text = "Hello ReactJS.NET World!",
                        //FavNum = GenerateGuid()
                    },
                    new CommentModel
                    {
                        Id = 2,
                        Author = "Pete Hunt",
                        Text = "This is one comment",
                        FavNum = Guid.NewGuid()
                    },
                    new CommentModel
                    {
                        Id = 3,
                        Author = "Jordan Walke",
                        Text = "This is *another* comment",
                        FavNum = Guid.NewGuid()
                    },
                };
        }
        public Guid GenerateGuid()
        {
            Guid G;
            return G = Guid.NewGuid();
        }

        public ActionResult Index()
        {
            return View();
        }

        [OutputCache(Location = OutputCacheLocation.None)]
        public ActionResult Comments()
        {
            return Json(_comments, JsonRequestBehavior.AllowGet);
        }
    }
}
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;
//using System.Web.Mvc;

//namespace Gregg.Controllers
//{
//    public class HomeController : Controller
//    {
//        public ActionResult Index()
//        {
//            return View();
//        }

//        public ActionResult About()
//        {
//            ViewBag.Message = "Your application description page.";

//            return View();
//        }

//        public ActionResult Contact()
//        {
//            ViewBag.Message = "Your contact page.";

//            return View();
//        }
//    }
//}