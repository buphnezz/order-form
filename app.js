// drop down menu in html
// allow user to click each item from drop down
// when item is selected from drop down display a prompt that accepts a number type input.
// store that user number in an array
// create a button called Add to Cart
// allow user to select Add to Cart submit button 
// store user input into a variable
// clear the individual input numbers for each image but still keep the total number variable.
// create item constructor with filepath and name  (use the constructor we already have).


function itemsHaveBeenAdded() {
  var viewCartMessageText = 'Click here to view your cart!';
  var messagePlusLinkDisplayed = viewCartMessageText.link("https://www.shoppingcartitems.com");
  document.getElementById("webPage").innerHTML = messagePlusLinkDisplayed;
  alert('Your items have been added to the cart successfully!');
  document.getElementById("add-to-cart").innerHTML = 'Items added successfully. Click the link below to view your cart!';
  }
