import { Given, When, Then } from 'cucumber';
import suitest, { assert, VRC } from 'suitest-js-api';

const getSelector = require('../helper/selectors');
var deviceName = "";

Given(/^'(.*)' application is open$/, async (device: string) => {
    deviceName = device;

    if (!deviceName.toLowerCase().match("samsung")) {
        await suitest.openApp();
    }
});

Given(/^accept all cookies$/, async () => {
    if (await suitest.element(getSelector('FunctionalCookiesBtn')).visible().timeout(1000)
        && await suitest.element(getSelector('ScrollBarCookie')).visible().timeout(1000)) {
        await assert.press(VRC.RIGHT);
        await assert.press(VRC.DOWN).repeat(20).interval(10);
        await assert.press(VRC.LEFT);
    }

    if (await suitest.element(getSelector('AllCookiesAccepteren')).visible().timeout(1000)) {
        await assert.press(VRC.ENTER);
    }
});

When(/^login is successful with email '(.*)' and password '(.*)'$/, async (email: string, password: string) => {
    await assert.element(getSelector('codeGenerator')).exists().timeout(5000);
    await assert.element(getSelector('LoginField')).exists().timeout(100).then(async () => { await assert.press(VRC.DOWN); });
    await assert.element(getSelector('KlantenDerviceBtn')).exists().then(async () => {
        await assert.press(VRC.DOWN);
        await assert.press(VRC.ENTER);
    });

    await assert.element(getSelector('backBtnKlantenService')).exists().timeout(1000).then(async () => { await assert.press(VRC.BACK); });

    await assert.element(getSelector('LoginField')).exists().then(async () => {
        await assert.press(VRC.DOWN);
        await assert.press(VRC.ENTER);
    });

    await assert.element(getSelector('emailInput')).exists().timeout(1000);

    await assert.element(getSelector('emailInput')).setText(email).then(async () => {
        await assert.press(VRC.RIGHT).repeat(12).interval(10);
        await assert.press(VRC.DOWN).repeat(1).interval(10);
        await assert.press(VRC.ENTER);
    });

    await assert.element(getSelector('passwordInput')).setText(password).then(async () => {
        await assert.press(VRC.RIGHT).repeat(12).interval(10);
        await assert.press(VRC.DOWN).repeat(1).interval(10);
        await assert.press(VRC.ENTER);
    });

    await assert.sleep(5000);
});

Then(/^profile page is accessed and displayed correctly$/, async () => {
    await assert.element(getSelector('firstProfi')).exists().timeout(1000).then(async () => { await assert.press(VRC.LEFT).repeat(5).interval(100); });
    await assert.element(getSelector('firstProfi')).exists().then(async () => { await assert.press(VRC.ENTER); });
    await assert.element(getSelector('VLLogo')).exists().timeout(3000);
});

Then(/^GeoBlock is accessed and displayed correctly$/, async () => {
    await assert.element(getSelector('GeoBlock')).exists().timeout(100).then(async () => { await assert.press(VRC.RIGHT); });
    await assert.element(getSelector('LogOutButton')).exists().timeout(100).then(async () => { await assert.press(VRC.ENTER).repeat(2).interval(10); });
    await assert.element(getSelector('codeGenerator')).exists().timeout(2000);
    endTest();
});

Then(/^Home Screen is accessed and displayed correctly$/, async () => {
    await assert.element(getSelector('VLLogo')).exists().timeout(100);
});

Then(/^video is played and navigated$/, async () => {
    if (await suitest.element(getSelector('VLLogo')).exists().timeout(100)) {
        await assert.press(VRC.DOWN);
        await assert.press(VRC.DOWN);

        await assert.element(getSelector('ContinueWatchngTitle')).exists();
        await assert.press(VRC.RIGHT);

        await assert.press(VRC.ENTER);
        await assert.sleep(20000);
        await assert.press(VRC.PAUSE).interval(3000);
        await assert.sleep(3000);
        await assert.press(VRC.FAST_FWD).repeat(3).interval(2000);
        await assert.sleep(3000);
        await assert.press(VRC.PLAY);
        await assert.sleep(3000);
        await assert.press(VRC.STOP);
        await assert.sleep(3000);
    }
});

Then(/^logout is successful$/, async () => {
    await assert.press(VRC.BACK).repeat(1).interval(3000);
    await assert.element(getSelector('VLLogo')).visible().timeout(2000).then(async () => {
        await assert.element(getSelector('ProfileBtn')).visible().timeout(5000);

        await assert.press(VRC.LEFT).repeat(5);
        await assert.press(VRC.DOWN).repeat(5);
        await assert.press(VRC.ENTER);
    });

    await assert.element(getSelector('firstProfi')).exists().timeout(8000).then(async () => {
        await assert.press(VRC.DOWN);
        await assert.press(VRC.ENTER);
        await assert.press(VRC.ENTER);
    });

    endTest();
});


async function endTest() {
    suitest.endTest();
};
