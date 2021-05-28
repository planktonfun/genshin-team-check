import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('trademark-project Tracking', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should search a name and all elements with data-track should be tracked', async () => {
    await page.navigateTo();
    await page.setSearchText("Trademark Name");
    await page.clickSearchButton();

    expect(await page.getSearchResultText()).toEqual("Trademark Name");

    var elements = await page.getTrackedElements();

    for (var i = elements.length - 1; i >= 0; i--) {
      elements[i].getAttribute('tracking').then(function (value) {
        expect(value).toEqual('true');
      });
    }

    var elements = await page.getTrackedInputElements();

    for (var i = elements.length - 1; i >= 0; i--) {
      elements[i].getAttribute('input-tracking').then(function (value) {
        expect(value).toEqual('true');
      });
    }

    var elements = await page.getTrackedHoverElements();

    for (var i = elements.length - 1; i >= 0; i--) {
      elements[i].getAttribute('hover-tracking').then(function (value) {
        expect(value).toEqual('true');
      });
    }

    var elements = await page.getTrackedInvalidElements();

    for (var i = elements.length - 1; i >= 0; i--) {
      elements[i].getAttribute('invalid-tracking').then(function (value) {
        expect(value).toEqual('true');
      });
    }

    await page.clickButton('#home > div.home__content-1 > div > div.home__jumbotron--get-this > div.body > div > div.action-container.word > div > button');

    await page.wait();

    await page.clickButton('input[placeholder="Describe in simple words here (e.g. clothing, food)."]');
    await page.setTextToInput(
      'input[placeholder="Describe in simple words here (e.g. clothing, food)."]', 'food'
    );
    await page.wait();
    await page.clickButton('.class-2');
    await page.clickButton('div.body:nth-of-type(4) > .field > .label');
    await page.clickButton('label[for="mat-checkbox-2-input"] > .mat-checkbox-inner-container');
    await page.clickButton('label[for="mat-checkbox-2-input"] > .mat-checkbox-inner-container');
    await page.setTextToInput('input[placeholder="Australian Business Number / Australian Company Number"]', 83134235304);
    await page.wait();
    await page.clickButton('div.field.middle:nth-of-type(3) > .content > div > input[type="text"].input-text');
    await page.clickButton('div.field.middle:nth-of-type(3) > .label > .main');
    await page.clickButton('div.field.middle:nth-of-type(4) > .content > div > input[type="text"].input-text');
    await page.clickButton('div.field.middle:nth-of-type(4) > .label > .main');
    await page.clickButton('div.field.middle:nth-of-type(4) > .content > div > input[type="text"].input-text');
    await page.setTextToInput('#mat-input-0', 'qweee');
    await page.wait();
    // await page.clickButton('.sub.auto');
    await page.clickButton('//a[contains(text(), "Enter manually")]');
    await page.clickButton('input[placeholder="Street No."]');
    await page.setTextToInput('input[placeholder="Street No."]', 1234);
    await page.setTextToInput('input[placeholder="Street Name"]', 'qweqwe');
    await page.setTextToInput('input[placeholder="City/Suburb"]', 'qweqwe');
    await page.setTextToInput('input[placeholder="Post Code"]', 1234);
    await page.clickButton('.body > div.field:nth-of-type(7)');
    await page.clickButton('label[for="mat-checkbox-1-input"] > .mat-checkbox-label');
    await page.clickButton('//button[contains(text(), "Continue")]');

    await page.wait();

  });

  afterEach(async () => {
  });
});
