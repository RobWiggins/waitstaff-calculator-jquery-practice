'use strict';
/* global $ */

// import store from "./store/store"
// import $ from 'jquery'

const calculatorHandler = (function() {
  
  function readyInputListeners() {
    $('#meal-forms').on('submit', event => {
      event.preventDefault();
      let mealPrice = event.target.price.value;
      let taxRate = event.target.tax.value;
      let tipRate = event.target.tip.value;
      
      
    });
  }


  function handleInput() {
    readyInputListeners();
  }  

  return {
    handleInput,
  };

})();