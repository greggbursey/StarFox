using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using PageObject_1st_Draft.Pages;

namespace PageObjectTests.Tests
{
    [TestClass]
    [TestCategory("Where is this showing up")]
    public class PageTest : BaseTest
    {
        [TestMethod]
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
