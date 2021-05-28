import { browser, by, element } from 'protractor';

describe('angularjs homepage', function() {
  	it('should greet the named user', async function() {
	    await browser.get('http://www.angularjs.org');

	    await element(by.model('yourName')).sendKeys('Julie');

	    // var greeting = element(by.css('body > div.container > div:nth-child(2) > div.span4 > div.well.ng-scope > div > h1'));

	    // expect(await greeting.getText()).toEqual('Hello Julie!');
	 });
 });