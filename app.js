//

//

//Budget Controller
var budgetController = (function() {
  //some code
})();

var UIController = (function() {
  //UI CODE
})();

//Global App Controller
var controller = (function(budgetCtrl, UICtrl) {
  var ctrlAddItem = function() {
    /*
    1. input data
    2. add the item to the budget controller
    3. add the item to the UI
    4. calculate the budget
    5. display the budget on the UI
    */
    console.log("it works");
  };
  //some code
  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);
  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
