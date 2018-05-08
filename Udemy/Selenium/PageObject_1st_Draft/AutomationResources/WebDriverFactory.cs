﻿using System;
using System.IO;
using System.Reflection;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Edge;
using OpenQA.Selenium.Firefox;

namespace AutomationResources
{
    public class WebDriverFactory
    {
        public IWebDriver Create(BrowserType browserType)
        {
            switch (browserType)
            {
                case BrowserType.Chrome:
                    return GetChromeDriver();
                case BrowserType.FireFox:
                    return GetFireFoxDriver();
                case BrowserType.Edge:
                    return GetEdgeDriver();
            }
            throw new NotImplementedException("No such browser currently exists!!!");
        }

        private readonly string _outputDirectory = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);

        private IWebDriver GetEdgeDriver()
        {
            return new EdgeDriver(_outputDirectory);
        }

        private IWebDriver GetFireFoxDriver()
        {
            return new FirefoxDriver(_outputDirectory);
        }

        private IWebDriver GetChromeDriver()
        {
            var outputDirectory = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            return new ChromeDriver(outputDirectory);
        }
    }
}
