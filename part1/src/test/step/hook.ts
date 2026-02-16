import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

BeforeAll(async function () {
    console.log('beforeAll')
    browser = await chromium.launch({ headless: false });
});

Before(async function () {
        console.log('before')

    page = await browser.newPage();
    this.page = page;

});

After(async function () {
    console.log('after')
    if (this.page) {
        await this.page.close();
    }
});

AfterAll(async function () {
    if (browser) {
        await browser.close();
    }
});