require('dotenv').config();
const puppeteer = require('puppeteer');
const { cookieParser } = require('./cookie-parser');
const cookieFile = cookieParser(process.env.MIHOYO_COOKIE);

// remove in production
/*const os = require('os');
const osPlatform = os.platform(); // possible values are: 'darwin', 'freebsd', 'linux', 'sunos' orn 'win32'
console.log('Scraper running on platform: ', osPlatform);
let executablePath;

if (/^win/i.test(osPlatform)) {
  executablePath = "C:\\Program\ Files\ (x86)\\Google\\Chrome\\Application\\chrome.exe"; // from command `which chromedriver.exe`
} else if (/^linux/i.test(osPlatform)) {
  executablePath = '/usr/bin/google-chrome';
}*/
// remove in production

(async () => {

  async function sleep(ms) {
      await new Promise(resolve => setTimeout(resolve, ms));
  }

  async function waitClick(selectedElement) {
    await page.waitForSelector(selectedElement)
    await page.click(selectedElement)
  }

  async function waitClickViaFrame(frame, selectedElement) {
    await frame.waitForSelector(selectedElement)
    await frame.click(selectedElement)
  }

  async function waitClickType(selectedElement, value) {
    await page.waitForSelector(selectedElement)
    await page.click(selectedElement)
    await page.type(selectedElement, value)
  }

  async function useCookie(cookieFile) {
    try {
      let cookies = cookieFile;
      cookies = JSON.parse(cookies);
      await page.setCookie(...cookies);
      // console.log({cookies})
    } catch(e) {
      console.log(e);
      return false;
    }
  }

  async function saveCookie() {
    const cookies = await page.cookies();
    console.log(JSON.stringify(cookies))
  }

  const browser = await puppeteer.launch({
    headless: true, // trye in production
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1600,926'],
    ignoreDefaultArgs: ['--disable-extensions'],
    // executablePath, // remove in production
  });

  const page = await browser.newPage();
  const navigationPromise = page.waitForNavigation()
  page.setViewport({ width: 1600, height: 926 });

  // check if user is logged in
  console.log('using cookies');
  await useCookie(cookieFile);
  await page.goto("https://webstatic-sea.mihoyo.com/bbs/event/signin-bh3/index.html?act_id=e202110291205111", {waitUntil: 'domcontentloaded', timeout: 60000})

  try {
    await page.evaluate(async function(inputs){
      document.querySelector( "div[class*='signday']" ).click();
    }, {});
  } catch(e) {
    throw new Error('didnt get any rewards today, have you claimed it already?');
  } finally {
    await sleep(5*1000);
    await browser.close();
  }
})();
