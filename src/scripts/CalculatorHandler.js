'use strict';
/* global $ */

// import store from "./store/store"
// import $ from 'jquery'
// import store from './store';

// eslint-disable-next-line no-unused-vars
const calculatorHandler = (function() {
  
  function generateChargesHTML() {
    let subtotal = Number(0.00);
    let tip = Number(0.00);
    

    if (store.meals.length !== 0) {
      const currMeal = store.meals[store.meals.length - 1];
      subtotal = Number(currMeal.mealPrice) + (Number(currMeal.mealPrice) * Number(currMeal.taxRate));
      tip = (Number(currMeal.tipRate) * subtotal);
    }

    let chargesElement = `<p>Subtotal  $${subtotal}</p>`;
    let tipElement = `<p>Tip  $${tip}</p>`;
    let total = `<p>Total  $${tip + subtotal}</p>`;

    console.log(store.meals);
    $('#charges-grid').html(chargesElement + tipElement + total);
    console.log('made it past cust charges');
  }


  function readyInputListeners() {
    $('#meal-forms').on('submit', event => {
      event.preventDefault();
      let mealPrice = event.target.price.value;
      let taxRate = event.target.tax.value;
      let tipRate = event.target.tip.value;
      
      // convert to percentages
      taxRate /= 100;
      tipRate /= 100;
      
      // add to store
      store.meals.push( {
        mealPrice,
        taxRate,
        tipRate,
      });

      // generate customer charges html
      generateChargesHTML();

    });
  }

  function generateEarningsSummary() {
    let tipElement = `<p>Tip Total: $${store.addAllTips()}</p>`;
    let mealCount = `<p>Meal Count: ${store.meals.length}</p>`;
    let averageTip = `<p>Average Tip Per Meal: $${store.calcAverageTip()}</p>`;
    $('#earnings-grid').html(tipElement.concat(mealCount, averageTip));
  }

  function render() {
    generateChargesHTML();
    generateEarningsSummary();
  }


  function handleInput() {
    readyInputListeners();
  }  

  return {
    handleInput,
    render,
  };

})();