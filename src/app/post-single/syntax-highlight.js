"use strict";

var decodeHtml = require("html-encoder-decoder").decode,
    showdown = require("showdown"),
    hljs = require("highlight.js"),
    classAttr = 'class="';

/**
 * showdownHighlight
 * Highlight the code in the showdown input.
 * 
 * Modified by Robi
 *
 * Examples:
 *
 * ```js
 * let converter = new showdown.Converter({
 *     extensions: [showdownHighlight]
 * });
 * ```
 *
 * Enable the classes in the `<pre>` element:
 *
 * ```js
 * let converter = new showdown.Converter({
 *     extensions: [showdownHighlight({ pre: true })]
 * });
 * ```
 *
 * @name showdownHighlight
 * @function
 */
module.exports = function showdownHighlight() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$pre = _ref.pre,
      pre = _ref$pre === undefined ? false : _ref$pre;

  return [{
    type: "output",
    filter: function filter(text, converter, options) {
      var left = "<pre><code\\b[^>]*>",
          right = "</code></pre>",
          flags = "g",
          replacement = function replacement(wholeMatch, match, left, right) {
        match = decodeHtml(match);
        var lang = (left.match(/class=\"([^ \"]+)/) || [])[1];

        if (left.includes(classAttr)) {
          var attrIndex = left.indexOf(classAttr) + classAttr.length;
          left = left.slice(0, attrIndex) + 'hljs ' + left.slice(attrIndex);
        } else {
          left = left.slice(0, -1) + ' class="hljs">';
        }

        if (pre && lang) {
          left = left.replace('<pre>', "<pre class=\"" + lang + " language-" + lang + "\">");
        }

        const language_typings = {
            "javascript": "JavaScript",
            "json": "JSON",
            "bash": "Bash",
            "csharp": "C#",
            "cplusplus": "C++",
            "php": "PHP"
        }
        const lang_title = Object.keys(language_typings).includes(lang) ? language_typings[lang] : lang !== undefined ? lang : "";
        left = '<div class="codewindow"><header><div class="lang-info"><i class="lang-icon devicon-' + lang + '-plain colored"></i><span class="lang-name">' + lang_title + '</span></div><button aria-label="Másolás a vágólapra" title="Másolás a vágólapra" class="copybtn" onclick="navigator.clipboard.writeText(this.parentElement.parentElement.getElementsByClassName(\'raw-code\')[0].innerText)">📋</button></header><pre class="raw-code">' + match + '</pre>' + left;
        right = right + "</div>";

        if (lang && hljs.getLanguage(lang)) {
          return left + hljs.highlight(match, { language: lang }).value + right;
        } else {
          return left + hljs.highlightAuto(match).value + right;
        }
      };

      return showdown.helper.replaceRecursiveRegExp(text, replacement, left, right, flags);
    }
  }];
};