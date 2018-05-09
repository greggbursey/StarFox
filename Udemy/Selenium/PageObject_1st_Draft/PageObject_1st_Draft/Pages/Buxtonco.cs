using OpenQA.Selenium;

namespace PageObject_1st_Draft.Pages
{
    public class Buxtonco : BasePage
    {
        public Buxtonco(IWebDriver driver) : base(driver)
        {
        }

        public void GoTo()
        {
            Driver.Navigate().GoToUrl("https://www.buxtonco.com");
        }

        public void FindLoginButton_AndClick()
        {
            Driver.FindElement(By.Id("login")).Click();
        }

        public void FindPlatformLink_AndClick()
        {
            Driver.FindElement(By.Id("ap-login")).Click();
        }
    }
}
