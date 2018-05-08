using System.IO;
using System.Reflection;
using AutomationResources;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using PageObject_1st_Draft.Pages;

namespace PageObject_1st_Draft.Tests
{
    [TestFixture]
    [Category("Where is this showing up")]
    public class PageTest
    {
        private IWebDriver _driver;

        [SetUp]
        public void Setup()
        {
            var factory = new WebDriverFactory();
            _driver = factory.Create(BrowserType.Chrome);
            _driver.Manage().Window.Maximize();
        }

        [TearDown]
        public void TearDown()
        {
            _driver.Quit();
        }

        [Test]
        // 1 - go to main qa site
        // 2 - search for complicated page
        // 3 - assert you're on the right page
        public void TestMethod1()
        {
            var x = new MainQaPage(_driver);
            x.GoToMainPage();
            x.ClickSignInLink();
            x.SearchFor("complicated page");
            Assert.AreEqual(_driver.Url, "https://www.ultimateqa.com/?s=complicated+page");
        }
    }
}
