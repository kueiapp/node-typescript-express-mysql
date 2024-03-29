"use strict";
/*/ article.route.js
* by kueiapp.com
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var article_controller_1 = __importDefault(require("../controllers/article.controller"));
var router = express_1.default.Router();
// parent route
router.route('/')
    .get(article_controller_1.default.articleGet)
    .post(article_controller_1.default.articlePost);
exports.default = router;
//# sourceMappingURL=article.route.js.map