"use strict";
var __importDefault = (this && __importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const suitest_js_api_1 = __importDefault(require("suitest-js-api"));
const cucumber_1 = require("cucumber");
cucumber_1.setDefaultTimeout(24 * 3600 * 1000);
cucumber_1.AfterAll(function () {
    return suitest_js_api_1.default.closeSession();
});
//# sourceMappingURL=hooks.js.map