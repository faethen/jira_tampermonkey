// ==UserScript==
// @name         Toggle Hide JQL Search Panel
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Toggle hiding and showing the JQL search pane using a keypress (default is ]).
// @author       faethen
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

(function() {
    'use strict';
    var $ = window.jQuery;
    var $hidden = false;
    $(document).on('keydown', function(e) {
        if (e.which == 221 && $hidden == false) {
            $('.issue-search-header').hide();
            $hidden = true;
            window.dispatchEvent(new Event('resize'));
        } else if (e.which == 221) {
            $('.issue-search-header').show();
            $hidden = false;
            window.dispatchEvent(new Event('resize'));
        }
    });
})();