/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/cat-facts.js
var cat_facts_catFacts = ["A house cat’s genome is 95.6 percent tiger, and they share many behaviors with their jungle ancestors, says Layla Morgan Wilde, a cat behavior expert and the founder of Cat Wisdom 101. These behaviors include scent marking by scratching, prey play, prey stalking, pouncing, chinning, and urine marking.", "Cats are believed to be the only mammals who don’t taste sweetness.", "cats are nearsighted, but their peripheral vision and night vision are much better than that of humans.", "Cats are supposed to have 18 toes (five toes on each front paw; four toes on each back paw).", "Cats can jump up to six times their length.", "Cats’ claws all curve downward, which means that they can’t climb down trees head-first. Instead, they have to back down the trunk."];

;// CONCATENATED MODULE: ./src/index.js

'./cat-facts.js'; // import 'jspolyfill-array.prototype.find';

var printCatFacts = function printCatFacts() {
  catFacts.forEach(function (fact) {
    console.log(fact);
  });
};

var printTheOneAboutVision = function printTheOneAboutVision() {
  console.log(cat_facts_catFacts.find(function (fact) {
    return fact === "cats are nearsighted, but their peripheral vision and night vision are much better than that of humans.";
  }));
};

printTheOneAboutVision();
/******/ })()
;