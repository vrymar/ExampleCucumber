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
const suitest_js_api_1 = __importStar(require("suitest-js-api"));
const cucumber_1 = require("cucumber");
cucumber_1.Given('I\'m on the {string} homepage', (appName) => __awaiter(void 0, void 0, void 0, function* () {
    switch (appName) {
        case 'WatchMe':
            yield suitest_js_api_1.default.openApp();
            yield suitest_js_api_1.assert.location().equals('http://file.suite.st/demoapp/hbbtv.html').timeout(4000);
            yield suitest_js_api_1.assert.element('root').exists().timeout(2000);
            break;
        default:
            throw 'Unknown app name';
    }
}));
cucumber_1.Given('The WatchMe app is in its default state', () => __awaiter(void 0, void 0, void 0, function* () {
    yield suitest_js_api_1.assert.element('watchmeLogo').matches([
        {
            name: suitest_js_api_1.PROP.HEIGHT,
            val: 0,
            type: suitest_js_api_1.COMP.NOT_EQUAL,
        },
        {
            name: suitest_js_api_1.PROP.WIDTH,
            val: 0,
            type: suitest_js_api_1.COMP.NOT_EQUAL,
        },
        suitest_js_api_1.PROP.IMAGE,
        suitest_js_api_1.PROP.OPACITY,
    ]).timeout(4000);
    yield suitest_js_api_1.assert.element('caminandes3Img').exists();
    yield suitest_js_api_1.assert.element('caminandes3TitleFocused').matches([
        suitest_js_api_1.PROP.BORDER_COLOR,
        suitest_js_api_1.PROP.OPACITY,
        suitest_js_api_1.PROP.TEXT_COLOR,
        suitest_js_api_1.PROP.TEXT_CONTENT,
    ]);
}));
cucumber_1.When('I navigate to {string} video', (videoTitle) => __awaiter(void 0, void 0, void 0, function* () {
    switch (videoTitle) {
        case 'Big Buck Bunny':
            yield suitest_js_api_1.assert.element('bigBuckBunnyTitle').exists();
            yield suitest_js_api_1.assert.element('bigBuckBunnyImg').exists();
            yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.RIGHT).until(suitest_js_api_1.default.element('bigBuckBunnyTitleFocused').matches([
                suitest_js_api_1.PROP.BORDER_COLOR,
                suitest_js_api_1.PROP.OPACITY,
                suitest_js_api_1.PROP.TEXT_COLOR,
                suitest_js_api_1.PROP.TEXT_CONTENT,
            ])).repeat(3);
            break;
        case 'Sintel':
            yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.RIGHT).until(suitest_js_api_1.default.element('sintelTitleFocused').matches([
                suitest_js_api_1.PROP.BORDER_COLOR,
                suitest_js_api_1.PROP.OPACITY,
                suitest_js_api_1.PROP.TEXT_COLOR,
                suitest_js_api_1.PROP.TEXT_CONTENT,
            ])).repeat(2);
            break;
        case 'Caminandes 3':
            yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.LEFT).until(suitest_js_api_1.default.element('caminandes3TitleFocused').matches([
                suitest_js_api_1.PROP.BORDER_COLOR,
                suitest_js_api_1.PROP.OPACITY,
                suitest_js_api_1.PROP.TEXT_COLOR,
                suitest_js_api_1.PROP.TEXT_CONTENT,
            ])).repeat(2);
            break;
        case 'Caminandes 2':
            yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.LEFT).until(suitest_js_api_1.default.element('caminandes2TitleFocused').matches([
                suitest_js_api_1.PROP.BORDER_COLOR,
                suitest_js_api_1.PROP.OPACITY,
                suitest_js_api_1.PROP.TEXT_COLOR,
                suitest_js_api_1.PROP.TEXT_CONTENT,
            ])).repeat(2);
            break;
        case 'Caminandes 1':
            yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.LEFT).until(suitest_js_api_1.default.element('caminandes1TitleFocused').matches([
                suitest_js_api_1.PROP.BORDER_COLOR,
                suitest_js_api_1.PROP.OPACITY,
                suitest_js_api_1.PROP.TEXT_COLOR,
                suitest_js_api_1.PROP.TEXT_CONTENT,
            ])).repeat(3);
            break;
        default:
            throw 'Unknown video name';
    }
}));
cucumber_1.When('I play the video', () => __awaiter(void 0, void 0, void 0, function* () {
    yield suitest_js_api_1.assert.press(suitest_js_api_1.VRC.ENTER);
    yield suitest_js_api_1.assert.video().exists().timeout(4000);
}));
cucumber_1.Then('The {string} video should start playing', (videoTitle) => __awaiter(void 0, void 0, void 0, function* () {
    switch (videoTitle) {
        case 'Big Buck Bunny':
            yield suitest_js_api_1.assert.video().matches([
                {
                    name: suitest_js_api_1.PROP.VIDEO_URL,
                    val: 'http://file.suite.st/IBC/videos/BigBuckBunny.mp4',
                },
                {
                    name: suitest_js_api_1.PROP.VIDEO_STATE,
                    val: suitest_js_api_1.VIDEO_STATE.PLAYING,
                },
                {
                    name: suitest_js_api_1.PROP.VIDEO_POSITION,
                    val: 2000,
                    type: suitest_js_api_1.COMP.EQUAL_GREATER,
                },
                {
                    name: suitest_js_api_1.PROP.VIDEO_LENGTH,
                    val: 634534,
                },
            ]).timeout(8000);
            break;
        default:
            throw 'Unknown video name';
    }
}));
cucumber_1.Then('The video should be playing', () => __awaiter(void 0, void 0, void 0, function* () {
    yield suitest_js_api_1.assert.video().matches([
        {
            name: suitest_js_api_1.PROP.VIDEO_URL,
            val: '',
            type: suitest_js_api_1.COMP.NOT_EQUAL,
        },
        {
            name: suitest_js_api_1.PROP.VIDEO_STATE,
            val: suitest_js_api_1.VIDEO_STATE.PLAYING,
        },
        {
            name: suitest_js_api_1.PROP.VIDEO_POSITION,
            val: 2000,
            type: suitest_js_api_1.COMP.EQUAL_GREATER,
        },
        {
            name: suitest_js_api_1.PROP.VIDEO_LENGTH,
            val: 0,
            type: suitest_js_api_1.COMP.NOT_EQUAL,
        },
    ]).timeout(8000);
}));
//# sourceMappingURL=watchme.js.map