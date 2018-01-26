
'use strict';

Product.allProducts = [];


function Product(filepath, name) {
  this.filepath = filepath;
  this.name = name;

  // Product.allProducts.push(this);
  // name.push(this.name);
}

new Product('img/bag.jpg', 'R2D2 BAG');
new Product('img/banana.jpg', 'Banana Slicer');
new Product('img/bathroom.jpg', 'Toliet Paper Holder');
new Product('img/boots.jpg', 'Boots');
new Product('img/breakfast.jpg', 'Breakfast Maker');
new Product('img/bubblegum.jpg', 'Bubblegum');
new Product('img/chair.jpg', 'Chair');
new Product('img/cthulhu.jpg', 'Cthulu');
new Product('img/dog-duck.jpg', 'Duck Beak for Dog');
new Product('img/dragon.jpg', 'Dragon');
new Product('img/pen.jpg', 'Pen');
new Product('img/pet-sweep.jpg', 'Pet Floor Cleaner');
new Product('img/scissors.jpg', 'Scissors');
new Product('img/shark.jpg', 'Shark');
new Product('img/sweep.png', 'Sweep');
new Product('img/tauntaun.jpg', 'Tauntaun');
new Product('img/unicorn.jpg', 'Unicorn');
new Product('img/usb.gif', 'USB');
new Product('img/water-can.jpg', 'Water-Can');
new Product ('img/wine-glass.jpg','Wine-Glass');


// var imgEl = document.getElementById('img');
// console.log(imgEl);
// imgEl.src = Product.allProducts.filepath;
// imgEl.alt = Product.allProducts.name;


//When Button Process Order is pushed animated message appears "Order Submited"

// function submitAlert();

// drop down menu in html
// allow user to click each item from drop down
// when item is selected from drop down display a prompt that accepts a number type input.
// store that user number in an array
// create a button called Add to Cart
// allow user to select Add to Cart submit button 
// store user input into a variable
// clear the individual input numbers for each image but still keep the total number variable.
// create item constructor with filepath and name  (use the constructor we already have).
var allItems = document.getElementById('allItems');

allItems.addEventListener('submit', itemsHaveBeenAdded);


function itemsHaveBeenAdded(event) {
  event.preventDefault();
  console.log('log has been fired');
  // var viewCartMessageText = 'Click here to view your cart!';
  // var messagePlusLinkDisplayed = viewCartMessageText.link("cart.html");
  // document.getElementById("webPage").innerHTML = messagePlusLinkDisplayed;
  // alert('Your items have been added to the cart successfully!');
  // document.getElementById("add-to-cart").innerHTML = 'Items added successfully. Click the link below to view your cart!';
  }
