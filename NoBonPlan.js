// ==UserScript==
// @name         NoBonPlanJVC
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Supprime les bons plans en page d'acceuil de JVC
// @author       You
// @match        https://www.jeuxvideo.com/
// @icon         https://www.google.com/s2/favicons?domain=jeuxvideo.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    [...document.getElementsByClassName("type-actu")].filter(x=>x.innerHTML==="News bon plan").forEach(y=>y.parentNode.parentNode.remove());
})();