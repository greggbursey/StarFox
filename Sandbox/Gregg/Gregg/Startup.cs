using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Gregg.Startup))]
namespace Gregg
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
