import QuakesController from './quakesController.js';
import buildNavigation from './routing.js';

const navElement = document.getElementById('mainNav');
buildNavigation(navElement);

// const myQuakesController = new QuakesController('#quakeList');
// myQuakesController.getQuakesByRadius();

const myQuakesController = new QuakesController('#quakeList');
myQuakesController.init();