"use strict";
const showdown = require("showdown");

module.exports = function showdownHighlight() {

  return [{
    type: "output",
    filter: function filter(text, converter, options) {
        var left = "<h[0-9]{1}\\b[^>]*>",
        right = "</h[0-9]{1}>",
        flags = "g",
        replacement = function replacement(wholeMatch, match, left, right) {
            function extractHeadingId(headingHtml) {
                return /id="(.*)"/g.exec(headingHtml)[1];
              }
            const id = extractHeadingId(left);

            return left + match + right;
        }
        return showdown.helper.replaceRecursiveRegExp(text, replacement, left, right, flags);
    }
  }];
};