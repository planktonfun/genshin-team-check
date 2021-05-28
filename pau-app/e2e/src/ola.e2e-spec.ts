
import {browser, by, element} from 'protractor';

describe('angularjs homepage', function() {
	it('go to the url', async function() {
		await browser.get('https://logo.honcho.com.au/a/w/honcho/logos?t=company+ABCD&tags=cat,dog,sun,cloud,mountain&types=icon,initial&colors=green,dark-blue&email=paulo.castro@honcho.com');
	});
	it('do step 1', async function() {
		var canvas = await element(by.css('#presentation-0 > lg-showcase > div > canvas'));
		var data   = await browser.executeScript("return arguments[0].toDataURL()", canvas);

		console.log(data); // do something with this data
	});
});

