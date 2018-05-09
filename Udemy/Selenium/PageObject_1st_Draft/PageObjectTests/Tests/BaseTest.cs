using AutomationResources.Enums;
using AutomationResources.Factories;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;

namespace PageObjectTests.Tests
{
    public class BaseTest
    {
        public IWebDriver BaseDriver { get; set; }
        
        [TestInitialize]
        public void Setup()
        {
            var factory = new WebDriverFactory();
            BaseDriver = factory.Create(BrowserType.Chrome);
            BaseDriver.Manage().Window.Maximize();
        }

        [TestCleanup]
        public void TearDown()
        {
            BaseDriver.Quit();
        }
    }
}
