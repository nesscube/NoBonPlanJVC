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
        setTimeout(function(){
            //Header samsung
            [...document.getElementsByClassName("header__navLink header__navLink--lvl1")].filter(x=>x.innerText=='SAMSUNG').forEach(y=>y.parentNode.remove());
            //BON PLANS page d'acceuil JVCg
            [...document.getElementsByClassName("card__contentType")].filter(x=>x.innerText=='NEWS BON PLAN'&&x.classList.length==4).forEach(y=>y.parentNode.parentNode.parentNode.parentNode.parentNode.remove());
            //Live feeds acceuil jvc (petits)
            [...document.getElementsByClassName("card__contentType")].filter(x=>x.innerText=='LIVE FEED'&&x.parentNode.parentNode.parentNode.parentNode.clientHeight<300).forEach(y=>y.parentNode.parentNode.parentNode.parentNode.remove());
            //news sponso
            [...document.getElementsByClassName("badge card__badge")].filter(x=>x.innerText=='Sponsorisé').forEach(y=>y.parentNode.parentNode.parentNode.parentNode.remove());
            // (grands)
            [...document.getElementsByClassName("card__contentType")].filter(x=>x.innerText=='LIVE FEED'&&x.parentNode.parentNode.parentNode.parentNode.clientHeight>300).forEach(y=>y.parentNode.parentNode.parentNode.remove());
            // news mise en avant
            [...document.getElementsByClassName("badge bg-primary text-uppercase text-truncate mw-100 card__contentType")].filter(x=>x.innerText=='NEWS BON PLAN').forEach(y=> {if (y.parentNode.parentNode.parentNode.clientHeight<400){y.parentNode.parentNode.parentNode.parentNode.style.marginTop = '-265px';}y.parentNode.parentNode.parentNode.remove();});
            //page "toutes les news"
            [...document.getElementsByClassName("typeTitle__2ceWaU")].filter(x=>x.innerText=='News bon plan').forEach(y=>y.parentNode.parentNode.parentNode.parentNode.remove());
    },100);
})();