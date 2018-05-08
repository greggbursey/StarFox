using NUnit.Framework;
using PageObject_1st_Draft.Pages;

namespace PageObject_1st_Draft.Tests
{
    [TestFixture]
    [Category("Where is this showing up")]
    public class PageTest : BaseTest
    {
        [Test]
        // 1 - go to main qa site
        // 2 - search for complicated page
        // 3 - assert you're on the right page
        public void TestMethod1()
        {
            var x = new MainQaPage(BaseDriver);
            x.GoToMainPage();
            x.ClickSignInLinkAndSearch("complicated page");
            Assert.AreEqual(BaseDriver.Url, "https://www.ultimateqa.com/?s=complicated+page");
        }
    }
}
