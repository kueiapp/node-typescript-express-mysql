"use strict";
/* article.controller.js
* by kueiapp.com
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var article_module_1 = __importDefault(require("../modules/article.module"));
var articlePost = function (req, res) {
};
/*  Article GET 取得  */
var articleGet = function (req, res) {
    article_module_1.default.selectArticle().then(function (result) {
        res.send(result);
    })
        .catch(function (err) {
        return res.send('Error: ', err);
    });
};
exports.default = {
    articleGet: articleGet, articlePost: articlePost
};
//# sourceMappingURL=article.controller.js.map