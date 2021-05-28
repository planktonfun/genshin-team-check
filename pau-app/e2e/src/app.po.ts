import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    browser.baseUrl = 'http://app.loc.srv:7337/';
    return browser.get(browser.baseUrl);
  }

  async wait() {
    return browser.driver.sleep(5000);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('#home > div.home__content-1 > div > div.home__jumbotron--maintext')).getText();
  }

  async setSearchText(txt): Promise<any> {
    return element(by.css('#home > div.home__content-1 > div > div.home__jumbotron--search-container > form > div > input')).sendKeys(txt);
  }

  async getSearchText(): Promise<string> {
    return element(by.css('#home > div.home__content-1 > div > div.home__jumbotron--search-container > form > div > input')).getText();
  }

  async clickSearchButton(): Promise<any> {
    return element(by.css(' #home > div.home__content-1 > div > div.home__jumbotron--search-container > form > div > button')).click();
  }

  async setTextToInput(elementPath,txt): Promise<any> {
    return element(by.css(elementPath)).sendKeys(txt);
  }

  async clickButton(elementPath): Promise<any> {
    return element(by.css(elementPath)).click();
  }

  async getSearchResultText(): Promise<string> {
    return element(by.css('#home > div.home__content-1 > div > div.home__jumbotron--get-this > div.body > div > div.result-container.word > div.text')).getText();
  }

  async getTrackedElements(): Promise<any> {
    return element.all(by.css('[data-track]'));
  }

  async getTrackedInputElements(): Promise<any> {
    return element.all(by.css('[data-track-input]'));
  }

  async getTrackedHoverElements(): Promise<any> {
    return element.all(by.css('[data-track-invalid]'));
  }

  async getTrackedInvalidElements(): Promise<any> {
    return element.all(by.css('[data-track-hover]'));
  }

}
