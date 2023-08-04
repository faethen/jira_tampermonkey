// ==UserScript==
// @name         Toggle Hide Issue list Pane
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Toggle hiding and showing the issue list pane using a keypress (default is \). Change the first * in the match to your JIRA URL.
// @author       faethen
// @match        https://*/*?*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function() {
    'use strict';
    var $ = window.jQuery;
    var $hidden = false;
    $(document).on('keydown', function(e) {
        if (e.which == 220 && $hidden == false) {
            $('.list-results-panel').hide();
            $hidden = true;
            window.dispatchEvent(new Event('resize'));
        } else if (e.which == 220) {
            $('.list-results-panel').show();
            $hidden = false;
            window.dispatchEvent(new Event('resize'));
        }
    });
})();