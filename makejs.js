"use strict";

var fs = require('fs');

var manifest = JSON.parse(fs.readFileSync('manifest.json'));

var header = `
"use strict";

// ==UserScript==
// @name        ` + manifest["name"] + `
// @namespace   https://github.com/xthexder/wide-github
// @description ` + manifest["description"] + `
// @author      xthexder
// @copyright   2013+, xthexder (https://github.com/xthexder)
// @contributor Jason Frey (https://github.com/Fryguy)
// @contributor Marti Martz (https://github.com/Martii)
// @contributor Paul "Joey" Clark (https://github.com/joeytwiddle)
// @contributor Robert Laverty (https://github.com/roblav96)
// @contributor Amir Meimari (https://github.com/amirmeimari)
// @contributor Nex4rius (https://github.com/nex4rius)
// @license     MIT; https://raw.githubusercontent.com/xthexder/wide-github/master/LICENSE
// @version     ` + manifest["version"] + `
// @icon        https://raw.githubusercontent.com/xthexder/wide-github/master/icon.png
// @homepageURL https://github.com/xthexder/wide-github
// @supportURL  https://github.com/xthexder/wide-github/issues
// @include     *github.com*
// @grant       none
// ==/UserScript==

var styleSheet = ` + "`;";

var footer = "`;" + `

(function () {
  var s = document.createElement('style');
  s.type = "text/css";
  s.innerHTML = styleSheet;
  (document.head || document.documentElement).appendChild(s);
})();
`;

var styleSheet = fs.readFileSync('wide-github.css');
var lines = styleSheet.toString().split("\n");

var output = header;
output += styleSheet;
output += footer;

fs.writeFileSync("build/wide-github.user.js", output);
