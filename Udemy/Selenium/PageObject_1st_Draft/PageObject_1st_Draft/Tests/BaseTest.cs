using AutomationResources;
using NUnit.Framework;
using OpenQA.Selenium;

namespace PageObject_1st_Draft.Tests
{
    public class BaseTest
    {
        public IWebDriver BaseDriver { get; set; }

        [SetUp]
        public void Setup()
        {
            var factory = new WebDriverFactory();
            BaseDriver = factory.Create(BrowserType.Chrome);
            BaseDriver.Manage().Window.Maximize();
        }

        [TearDown]
        public void TearDown()
        {
            BaseDriver.Quit();
        }
    }
}
