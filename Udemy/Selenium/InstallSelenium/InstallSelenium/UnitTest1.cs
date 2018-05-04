using System;
using System.IO;
using System.Reflection;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;
using ExpectedConditions = SeleniumExtras.WaitHelpers.ExpectedConditions;

namespace InstallSelenium
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void ChromeDriver_TEST()
        {
            //var driver = new ChromeDriver();

            var driver = GetChromeDriver();
            driver.Navigate().GoToUrl("http://www.ultimateqa.com");
        }

        private IWebDriver GetChromeDriver()
        {
            var outputDir = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);

            return new ChromeDriver(outputDir);
        }

        private const string _baseURL = "http://www.ultimateqa.com/";

        [TestMethod]
        public void SeleniumNavigationTest()
        {
            var driver = GetChromeDriver();

            driver.Navigate().GoToUrl(_baseURL);
            Assert.IsNotNull(driver.Title);

            driver.Navigate().GoToUrl(_baseURL + "automation");
            Assert.IsNotNull(driver.Title);

            driver.Navigate().GoToUrl(_baseURL + "automation");
            var complicatedElement = driver.FindElement(By.XPath("//a[contains(@href, 'complicated-page')]"));
            complicatedElement.Click();
            Assert.AreEqual("Complicated Page - Ultimate QA", driver.Title);

            driver.Navigate().Back();
            Assert.AreEqual("Automation Practice - Ultimate QA", driver.Title);
        }

        [TestMethod]
        public void ElementInterrogation()
        {
            var driver = GetChromeDriver();
            driver.Navigate().GoToUrl(_baseURL + "simple-html-elements-for-automation");
            driver.Manage().Window.Maximize();

            var button = driver.FindElement(By.Id("button1"));

            Assert.AreEqual(button.GetAttribute("type"), "submit");
            Assert.AreEqual(button.GetCssValue("letter-spacing"), "normal");
            Assert.IsTrue(button.Displayed);
            Assert.IsTrue(button.Enabled);
            Assert.IsFalse(button.Selected);
            Assert.AreEqual(button.Text, "Click Me!");
            Assert.AreEqual(button.TagName, "button");
            Assert.AreEqual(button.Size.Height, 21);
            Assert.AreEqual(button.Location.X, 190);
            Assert.AreEqual(button.Location.Y, 330);

            driver.Quit();
        }

        [TestMethod]
        public void WaitUntil()
        {
            var driver = GetChromeDriver();
            var wait = new WebDriverWait(driver, TimeSpan.FromSeconds(5));

            wait.Until(ExpectedConditions.ElementToBeClickable(By.Id("id-here")));
        }

        [TestMethod]
        public void WaitingTest()
        {
            var url = "https://www.ultimateqa.com/";
            var driver = GetChromeDriver();
            var wait = new WebDriverWait(driver, TimeSpan.FromSeconds(5));
            var automationExercises = "//*[@id='menu-item-587']/a[@href='https://www.ultimateqa.com/automation/']";

            //open page
            driver.Navigate().GoToUrl(url);

            //sync with slowest loading element
            wait.Until(ExpectedConditions.ElementIsVisible(By.XPath("//*[@style='background-image: url(https://www.ultimateqa.com/wp-content/uploads/2016/04/blog-title-bg.jpg);']")));
            
            //proceed
            driver
                .FindElement(By.XPath("//*[@id='menu-item-587']/a[@href='https://www.ultimateqa.com/automation/']"))
                .Click();
        }
    }
}
