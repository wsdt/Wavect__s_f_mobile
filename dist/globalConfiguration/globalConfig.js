"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TabRoutes_1 = require("../mvc/views/components/system/TabRouter/TabRoutes");
exports.useLocalBackend = __DEV__ && true;
exports.disableCache = __DEV__ && true;
exports.useReactotron = __DEV__ && true;
exports.START_PAGE = TabRoutes_1.tabRoutes.HomeScreen;
exports.BACKEND_URL = exports.useLocalBackend ? 'http://95082bf8.ngrok.io' : 'https://api.dev.wavect.io';
exports.BACKEND_MOBILE_API = exports.BACKEND_URL + "/api/mobile/v1";
//# sourceMappingURL=globalConfig.js.map