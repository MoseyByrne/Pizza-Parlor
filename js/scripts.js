// Business Logic

function Pizza(meat, size) {
  this.meat = meat;
  this.size = size;
  this.price;
}


Pizza.prototype.price = function() {
  this.price = 10;
  if (this.size === "Large") {
    this.price += 5;
  } 
  if (this.size === "Small") {
    this.price += 0;
  }
  if (this.topping === "Pepperoni") {
    this.price += 2;
  }
  return this.price;
}

// UI logic

$(document).ready(function() {
  $("form.Order").submit(function(event) {
    event.prevntDefault();
    $("#total").show();
  })  
})