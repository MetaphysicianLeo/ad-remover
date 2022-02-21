// ==UserScript==
// @name         bimiacg ads remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  ads filter
// @author       MetaphysicianLeo
// @match        http*://*.bimiacg.net/*
// @match        http*://*.bimiacg2.net/*
// @match        http*://*.bimiacg4.net/*
// @match        http*://91mjw.com/*
// @match        http*://mjw91.com/*
// @match        http*://www.yhdm.so/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    /**
     * @param {Element} e
    */
    function elementDelete(e) {
        e.remove();
    }
    let ads_div = ["#adv_wrap_hh", "#HMcoupletDivleft", "#HMcoupletDivright", "#HMRichBox"];
    for (let ads of ads_div) {
        waitForKeyElements(ads, elementDelete);
    }

    // Your code here...
})();