"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const cucumber_1 = require("cucumber");
const suitest_js_api_1 = __importStar(require("suitest-js-api"));
const getSelector = require('../helper/selectors');
var deviceName;
cucumber_1.Given(/^'(.*)' application is open$/, (device) => __awaiter(void 0, void 0, void 0, function* () {
    deviceName = device;
    if (deviceName.toLowerCase().match("samsung")) {
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.MENU);
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.RIGHT).repeat(2).interval(100);
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.ENTER);
        yield suitest_js_api_1.assert.sleep(10000);
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.UP).repeat(4).interval(100);
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.DOWN).repeat(3).interval(100);
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.LEFT).repeat(3).interval(100);
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.ENTER);
        yield suitest_js_api_1.assert.sleep(10000);
    }
    else {
        yield suitest_js_api_1.assert.openApp();
    }
}));
cucumber_1.Given(/^accept all cookies$/, () => __awaiter(void 0, void 0, void 0, function* () {
    if ((yield suitest_js_api_1.default.element(getSelector('FunctionalCookiesBtn')).visible().timeout(2000))
        && (yield suitest_js_api_1.default.element(getSelector('ScrollBarCookie')).visible().timeout(2000))) {
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.RIGHT);
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.DOWN).repeat(20).interval(10);
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.LEFT);
    }
    if (yield suitest_js_api_1.default.element(getSelector('AllCookiesAccepteren')).visible().timeout(2000)) {
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.ENTER);
    }
}));
cucumber_1.When(/^login is successful with email '(.*)' and password '(.*)'$/, (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    yield suitest_js_api_1.assert.element(getSelector('codeGenerator')).exists().timeout(5000);
    yield suitest_js_api_1.assert.element(getSelector('LoginField')).doesNot().exist().timeout(2000).then(() => __awaiter(void 0, void 0, void 0, function* () { assert_1.fail("Login field is not found"); }));
    yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.DOWN);
    yield suitest_js_api_1.assert.element(getSelector('KlantenDerviceBtn')).exists().then(() => __awaiter(void 0, void 0, void 0, function* () {
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.DOWN);
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.ENTER);
    }));
    yield suitest_js_api_1.assert.element(getSelector('backBtnKlantenService')).exists().timeout(2000).then(() => __awaiter(void 0, void 0, void 0, function* () { yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.BACK); }));
    yield suitest_js_api_1.assert.element(getSelector('LoginField')).exists().then(() => __awaiter(void 0, void 0, void 0, function* () {
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.DOWN);
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.ENTER);
    }));
    yield suitest_js_api_1.assert.element(getSelector('emailInput')).doesNot().exists().timeout(2000).then(() => __awaiter(void 0, void 0, void 0, function* () { assert_1.fail("Email field is not found."); }));
    yield suitest_js_api_1.assert.element(getSelector('emailInput')).setText(email).then(() => __awaiter(void 0, void 0, void 0, function* () {
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.RIGHT).repeat(12).interval(100);
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.DOWN).repeat(1).interval(100);
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.ENTER);
    }));
    yield suitest_js_api_1.assert.element(getSelector('passwordInput')).doesNot().exists().timeout(1000).then(() => __awaiter(void 0, void 0, void 0, function* () { assert_1.fail("Password field is not found."); }));
    yield suitest_js_api_1.assert.element(getSelector('passwordInput')).setText(password).then(() => __awaiter(void 0, void 0, void 0, function* () {
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.RIGHT).repeat(12).interval(100);
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.DOWN).repeat(1).interval(100);
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.ENTER);
    }));
    yield suitest_js_api_1.assert.sleep(5000);
}));
cucumber_1.Then(/^profile page is accessed and displayed correctly$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield suitest_js_api_1.assert.element(getSelector('firstProfi')).doesNot().exists().timeout(2000).then(() => __awaiter(void 0, void 0, void 0, function* () { assert_1.fail("Profile page is not found."); }));
    yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.LEFT).repeat(5).interval(100);
    yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.ENTER);
    yield suitest_js_api_1.assert.element(getSelector('VLLogo')).exists().timeout(3000);
}));
cucumber_1.Then(/^GeoBlock is accessed and displayed correctly$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield suitest_js_api_1.assert.element(getSelector('GeoBlock')).doesNot().exists().timeout(2000).then(() => __awaiter(void 0, void 0, void 0, function* () { assert_1.fail("Geo block is not found"); }));
    yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.RIGHT);
    yield suitest_js_api_1.assert.element(getSelector('LogOutButton')).doesNot().exists().timeout(2000).then(() => __awaiter(void 0, void 0, void 0, function* () { assert_1.fail("Logout button is not found"); }));
    yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.ENTER).repeat(2).interval(10);
    yield suitest_js_api_1.assert.element(getSelector('codeGenerator')).exists().timeout(2000);
    endTest();
}));
cucumber_1.Then(/^Home Screen is accessed and displayed correctly$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield suitest_js_api_1.assert.element(getSelector('VLLogo')).doesNot().exists().timeout(2000).then(() => __awaiter(void 0, void 0, void 0, function* () { assert_1.fail("Logo is not found"); }));
}));
cucumber_1.Then(/^video is played and navigated$/, () => __awaiter(void 0, void 0, void 0, function* () {
    if (yield suitest_js_api_1.default.element(getSelector('VLLogo')).exists().timeout(2000)) {
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.DOWN);
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.DOWN);
        yield suitest_js_api_1.assert.element(getSelector('ContinueWatchngTitle')).exists();
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.RIGHT);
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.ENTER);
        yield suitest_js_api_1.assert.sleep(20000);
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.PAUSE).interval(3000);
        yield suitest_js_api_1.assert.sleep(3000);
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.FAST_FWD).repeat(3).interval(2000);
        yield suitest_js_api_1.assert.sleep(3000);
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.PLAY);
        yield suitest_js_api_1.assert.sleep(3000);
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.STOP);
        yield suitest_js_api_1.assert.sleep(3000);
    }
}));
cucumber_1.Then(/^logout is successful$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.BACK).repeat(1).interval(3000);
    yield suitest_js_api_1.assert.element(getSelector('VLLogo')).doesNot().exist().timeout(2000).then(() => __awaiter(void 0, void 0, void 0, function* () { assert_1.fail("Logo is not found"); }));
    yield suitest_js_api_1.assert.element(getSelector('VLLogo')).visible().timeout(2000).then(() => __awaiter(void 0, void 0, void 0, function* () {
        yield suitest_js_api_1.assert.element(getSelector('ProfileBtn')).visible().timeout(5000);
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.LEFT).repeat(5);
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.DOWN).repeat(5);
        yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.ENTER);
    }));
    yield suitest_js_api_1.assert.element(getSelector('firstProfi')).doesNot().exist().timeout(8000).then(() => __awaiter(void 0, void 0, void 0, function* () { assert_1.fail("Profile is not found"); }));
    yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.DOWN);
    yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.ENTER);
    yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.ENTER);
    endTest();
}));
function endTest() {
    return __awaiter(this, void 0, void 0, function* () {
        suitest_js_api_1.default.endTest();
    });
}
;
//# sourceMappingURL=smokeSteps.js.map