using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Threading;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium.Support.UI;
using Assert = Microsoft.VisualStudio.TestTools.UnitTesting.Assert;

namespace NUnit
{
    [TestFixture]
    public class InterActionsDemo
    {
        private Actions _actions;
        private FirefoxDriver _driver;
        private WebDriverWait _wait;

        [SetUp]
        public void Setup()
        {
            _driver = GetFFDriver();
            _actions = new Actions(_driver);
            _wait = new WebDriverWait(_driver, TimeSpan.FromSeconds(6));
        }

        [TearDown]
        public void Teardown()
        {
            _driver.Quit();
        }

        private FirefoxDriver GetFFDriver()
        {
            var outputDir = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);

            return new FirefoxDriver(outputDir);
        }

        [Test]
        public void DragAndDrop_TEST()
        {
            _driver.Navigate().GoToUrl("http://jqueryui.com/droppable");
            _driver.Manage().Window.Maximize();

            _wait.Until(ExpectedConditions.FrameToBeAvailableAndSwitchToIt(By.ClassName("demo-frame")));

            IWebElement sourceElement = _driver.FindElement(By.Id("draggable"));
            IWebElement targetElement = _driver.FindElement(By.Id("droppable"));

            _actions.DragAndDrop(sourceElement, targetElement).Perform();

            Assert.AreEqual("Dropped!", targetElement.Text);
        }

        [Test]
        public void DragAndDrop_TEST2()
        {
            _driver.Navigate().GoToUrl("http://jqueryui.com/droppable");
            _driver.Manage().Window.Maximize();

            _wait.Until(ExpectedConditions.FrameToBeAvailableAndSwitchToIt(By.ClassName("demo-frame")));

            IWebElement sourceElement = _driver.FindElement(By.Id("draggable"));
            IWebElement targetElement = _driver.FindElement(By.Id("droppable"));

            _actions
                .ClickAndHold(sourceElement)
                .MoveToElement(targetElement)
                .Release(targetElement)
                .Build()
                .Perform();

            Assert.AreEqual("Dropped!", targetElement.Text);
        }

        [Test]
        public void ResizeMe_TEST()
        {
            _driver.Navigate().GoToUrl("https://jqueryui.com/resizable/");
            _driver.Manage().Window.Maximize();

            _wait.Until(ExpectedConditions.FrameToBeAvailableAndSwitchToIt(By.ClassName("demo-frame")));

            var resizeHandle = _driver.FindElement(By.XPath("//*[@id='resizable']/div[3]"));

            _actions
                .ClickAndHold(resizeHandle)
                .MoveByOffset(100, 100)
                .Build()
                .Perform();
            
            Assert.IsTrue(_driver.FindElement(By.XPath("//*[@id='resizable' and @style]")).Displayed);
        }

        [Test]
        public void Buxtonco_TEST()
        {
            _driver.Navigate().GoToUrl("https://www.buxtonco.com");
            _driver.Manage().Window.Maximize();

            var loginsContainer = _driver.FindElement(By.XPath("//*[contains(@class, 'fill logins')]"));

            _driver.FindElement(By.Id("login")).Click();

            Assert.IsTrue(loginsContainer.GetAttribute("class").Contains("active"));
        }
        
        [Test]
        public void Canvas_TEST()
        {
            _driver.Navigate().GoToUrl("http://compendiumdev.co.uk/selenium/gui_user_interactions.html");
            _driver.Manage().Window.Maximize();

            var canvas = _driver.FindElement(By.TagName("canvas"));
            var random = new Random();

            for (var i = 0; i < 1000; i++)
            {
                Thread.Sleep(50);
                
                var randInt = random.Next(-200, 200);
                var randInt2 = random.Next(-200, 200);

                _actions
                    .ClickAndHold(canvas)
                    .Build()
                    .Perform();

                _actions.MoveByOffset(randInt, randInt2)
                    .Release()
                    .Build()
                    .Perform();
            }
        }
    }
}
