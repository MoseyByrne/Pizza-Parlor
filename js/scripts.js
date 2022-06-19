// Business Logic

function Pizza(meat, size) {
  this.meat = meat;
  this.size = size;
  this.price;
}


Pizza.prototype.price = function() {
  this.price = 10;
  if (this.size === "Large") {
    this.price += 6;
  }if (this.size === "Large" && this.meat === "Sausage" || "Pepperoni"){
    this.price += 4;
  }if (this.size === "Large" && this.meat === "No Meat"){
    this.price -= 4;
  } if (this.size === "Medium") {
    this.price -= 3;
  }if (this.size === "Medium" && this.meat === "Sausage" || "Pepperoni"){
    this.price += 2;
  }if (this.size === "Medium" && this.meat === "No Meat"){
    this.price -= 2;
  }if (this.size === "Small") {
    this.price -= 6;
  }if (this.size === "Small" && this.meat === "Sausage" || "Pepperoni"){
    this.price += 1;
  }if (this.size === "Small" && this.meat === "No Meat"){
    this.price -= 1;
  }

 

// // for(index= 0; index < this.topping; index++) {
// //       this.price += 1;
// } 
  $(".receipt").text(this.price);
}

// UI logic

$(document).ready(function() {
  $("form#Order").submit(function(event) {
    event.preventDefault();
  
    const meat = $("select#meat").val();
    const size = $("select#size").val();
    let pizza = new Pizza(meat, size);
    pizza.price();
    $("#total").show();
    $("#total").text(this.price);
   
  })  
})

  