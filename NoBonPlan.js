// ==UserScript==
// @name         NoBonPlanJVC
// @namespace    http://tampermonkey.net/
// @version      0.2.1
// @description  Supprime les bons plans des news JVC
// @author       You
// @match        https://www.jeuxvideo.com/*
// @icon         https://www.google.com/s2/favicons?domain=jeuxvideo.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
   //BON PLANS page d'acceuil JVC
    [...document.getElementsByClassName("card__contentType")].filter(x=>x.innerText=='NEWS BON PLAN'&&x.classList.length==4).forEach(y=>y.parentNode.parentNode.parentNode.parentNode.parentNode.remove());
	//Live feeds acceuil jvc
	 [...document.getElementsByClassName("card__contentType")].filter(x=>x.innerText=='LIVE FEED').forEach(y=>y.parentNode.parentNode.parentNode.parentNode.remove());
    // news mise en avant
     [...document.getElementsByClassName("badge bg-primary text-uppercase text-truncate mw-100 card__contentType")].filter(x=>x.innerText=='NEWS BON PLAN').forEach(y=> {y.parentNode.parentNode.parentNode.parentNode.style.marginTop = '-265px';y.parentNode.parentNode.parentNode.remove();});
   //page "toutes les news"
    setTimeout(function(){
    [...document.getElementsByClassName("typeTitle__2ceWaU")].filter(x=>x.innerText=='News bon plan').forEach(y=>y.parentNode.parentNode.parentNode.parentNode.remove());
    },500);
})();