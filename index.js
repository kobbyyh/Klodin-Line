let cartTotal = 0;

// Get all increment buttons
const incrementButtons = document.querySelectorAll('.increment');

// Loop through each increment button and add a click event listener
incrementButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the quantity element for this product
    const quantityElement = button.parentNode.querySelector('.quantity');

    // Get the current quantity value
    let quantity = Number(quantityElement.innerText);

    // Increment the quantity value
    quantity++;

    // Set the new quantity value in the quantity element
    quantityElement.innerText = quantity;

    // Get the price for this product
    const price = Number(button.parentNode.querySelector('.price').innerText);

    // Update the cart total
    addToCart(price, quantity, 'increment');
  });
});

// Get all decrement buttons
const decrementButtons = document.querySelectorAll('.decrement');

// Loop through each decrement button and add a click event listener
decrementButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the quantity element for this product
    const quantityElement = button.parentNode.querySelector('.quantity');

    // Get the current quantity value
    let quantity = Number(quantityElement.innerText);

    // If the quantity is already 1, do not decrement further
    if (quantity === 1) {
      return;
    }

    // Decrement the quantity value
    quantity--;

    // Set the new quantity value in the quantity element
    quantityElement.innerText = quantity;

    // Get the price for this product
    const price = Number(button.parentNode.querySelector('.price').innerText);

    // Update the cart total
    addToCart(price, quantity, 'decrement');
  });
});

// Function to add a product to the cart
function addToCart(quantity, price) {
  cartTotal += quantity * price;
  document.querySelector('.cart-total').textContent = '$' + cartTotal.toFixed(2);
}

document.querySelectorAll('.increment').forEach(button => {
  button.addEventListener('click', event => {
    const quantitySpan = event.currentTarget.parentElement.querySelector('.quantity');
    const quantity = parseInt(quantitySpan.textContent);
    const price = parseFloat(event.currentTarget.parentElement.querySelector('.card-text').textContent.slice(1));
    quantitySpan.textContent = quantity + 1;
    addToCart(1, price);
  });
});

document.querySelectorAll('.decrement').forEach(button => {
  button.addEventListener('click', event => {
    const quantitySpan = event.currentTarget.parentElement.querySelector('.quantity');
    const quantity = parseInt(quantitySpan.textContent);
    const price = parseFloat(event.currentTarget.parentElement.querySelector('.card-text').textContent.slice(1));
    if (quantity > 1) {
      quantitySpan.textContent = quantity - 1;
      addToCart(-1, price);
    }
  });
});







