import suitest from 'suitest-js-api';
import { AfterAll, setDefaultTimeout } from "cucumber";

setDefaultTimeout(24 * 3600 * 1000);

AfterAll(function () {
    return suitest.closeSession();
});