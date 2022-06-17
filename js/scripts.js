// Business Logic

function Pizza(topping, size) {
  this.topping = topping;
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
  console.log(this.price);
}