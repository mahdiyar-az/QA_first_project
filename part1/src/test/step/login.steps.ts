import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I am on the Booking.com homepage',{ timeout: 3000000 }, async function () {
    await this.page.goto('https://www.booking.com', {
        waitUntil: 'domcontentloaded',
        timeout: 3000000
    });
    
    // console.log('Navigated to Booking.com');
    const dismissButton = this.page.locator('button[aria-label="Dismiss sign-in info."]');
    await dismissButton.waitFor({ state: 'visible', timeout: 60000 })
        .then(() => dismissButton.click())
        .catch(() => console.log('sign-in button not found'));

    const cookieButton = this.page.locator('button[id="onetrust-accept-btn-handler"]');
    await cookieButton.waitFor({ state: 'visible', timeout: 60000 })
        .then(() => cookieButton.click())
        .catch(() => console.log('cookie button not found'));
    

    // console.log('step 1 finish');

});

When('click on currency button', async function () {
    await this.page.locator('button[data-testid="header-currency-picker-trigger"]').click();

});

When('select TRY from currency options', async function () {
    await this.page.locator(`li:has-text("TRY")`).first().click();
});

When('fill the destination with London',{ timeout: 3000000 }, async function () {
    await this.page.locator('input[name="ss"]').click();
    await this.page.locator('input[name="ss"]').fill('');
    await this.page.locator('input[name="ss"]').type('London', { delay: 200 });
    await this.page.waitForTimeout(5000);

});

When('select first suggestion', async function () {
    await this.page.locator('li[id="autocomplete-result-0"]').click();
});
When('open the calendar', async function () {
    await this.page.locator('span[data-testid="date-display-field-start"]').first().click({
        force: true,
        timeout: 5000
    });
    await this.page.locator('span[data-testid="date-display-field-start"]').first().click({
        force: true,
        timeout: 5000
    });
});

When('click flexible button', async function () {

    const button = this.page.locator('button[id="flexible-searchboxdatepicker-tab-trigger"]');
    await button.click();
});

When('select A month option', async function () {
    await this.page.locator(`span:has-text("A month")`).click();
});

When('choose Mar2026 as the month', { timeout: 3000000 },async function () {
     await this.page.locator('span:has-text("Mar2026")').first().click();
     await this.page.waitForTimeout(2000);

});

When('click on Select dates button in calendar', async function () {
    await this.page.locator(`button:has-text("Select dates")`).click();
});

When('open adults part', { timeout: 3000000 }, async function () {
    await this.page.locator('button[data-testid="occupancy-config"]').click();
});

When('set adults to 8', { timeout: 3000000 }, async function () {
    let currentAdults = await this.page.locator('#group_adults').inputValue();

    const targetAdults = 8;
    let currentCount = parseInt(currentAdults);

    for (currentCount; currentCount < targetAdults; currentCount++) {
        await this.page.locator('div.e484bb5b7a:has(label[for="group_adults"]) button.dc8366caa6').click();
        await this.page.waitForTimeout(100); 
    }

    await this.page.waitForTimeout(1000);

});

When('enable the Travelling with pets option',{ timeout: 30000 }, async function () {
    const toggleSwitch = this.page.locator('input[id="pets"]');
    if (!await toggleSwitch.isChecked()) {
       await this.page.locator('input[id="pets"]').check({ force: true });
    }
    await this.page.waitForTimeout(1000);
});
When('click Done button',{ timeout: 30000 }, async function () {
    await this.page.locator('button:has(span:has-text("Done"))').click();
    await this.page.waitForTimeout(1000);
});

When('click Search button', async function () {
    await this.page.locator('button:has(span:has-text("Search"))').click();
});

Then('I should see the list of hotels matching my criteria',{ timeout: 3000000 }, async function () {
    await this.page.waitForTimeout(5000);

    await this.page.waitForSelector('div[data-testid="property-card"]', { timeout: 10000 });
    const hotelCount = await this.page.locator('div[data-testid="property-card"]').count();
    //  console.log('hotel count')
    //  console.log(hotelCount)
   
});

Then('click See availability button for the third hotel in the list',{ timeout: 3000000 }, async function () {
        await this.page.waitForTimeout(5000);

    // کلیک روی دکمه "See availability" برای سومین هتل
    const seeAvailabilityButtons = await this.page.locator('a:has-text("See availability")').all();
        await this.page.waitForTimeout(5000);
    //  console.log('seeAvailabilityButtons')
    //  console.log(seeAvailabilityButtons)
     await seeAvailabilityButtons[2].click();

});





