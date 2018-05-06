using OpenQA.Selenium;

namespace PageObject_1st_Draft.Pages
{
    public class MainQaPage : BasePage
    {   
        public MainQaPage(IWebDriver driver) : base(driver)
        {
        }

        public void GoToMainPage()
        {
            Driver.Navigate().GoToUrl("https://www.ultimateqa.com/");
        }

        public void ClickSignInLink()
        {
            Driver.FindElement(By.Id("et_top_search")).Click();
        }

        public void SearchFor(string term)
        {
            var searchField = Driver.FindElement(By.ClassName("et-search-field"));
            searchField.SendKeys(term);
            searchField.SendKeys(Keys.Enter);
        }
    }
}