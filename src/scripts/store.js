'use strict';

const store = (function () {
  // const meals = [];
  function resetMeals() {
    this.meals = [];
  }

  function addAllTips() {
    let tipTotal = Number(0);
    let subtotal = Number(0);
    
    this.meals.forEach(meal => {
      subtotal =
          Number(meal.mealPrice) +
          (Number(meal.mealPrice) * Number(meal.taxRate));
      let tip = Number(meal.tipRate) * subtotal;
      tipTotal += tip;
    });

    return tipTotal;
  }

  function calcAverageTip() {
    if ( this.meals.length !== 0 ) {
      console.log(this.meals);
      return this.addAllTips() / this.meals.length;
    } else {
      return 0;
    }
  }

  return {
    meals: [],
    resetMeals,
    addAllTips,
    calcAverageTip,
  };

})();