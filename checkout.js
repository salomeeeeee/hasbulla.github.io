// Retrieve cart data from localStorage
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const cartTotal = parseFloat(localStorage.getItem('cartTotal')) || 0;

// Display cart data on the checkout page
updateCartDisplay();

// Add event listener to the "Confirm Purchase" button
document.getElementById('confirm-button').addEventListener('click', confirmPurchase);

function updateCartDisplay() {
  // ...Existing code...
}

function confirmPurchase() {
  // Clear cart data from localStorage
  localStorage.removeItem('cartItems');
  localStorage.removeItem('cartTotal');

  // In a real-world scenario, you'd handle the purchase here
  // This is a basic example, so we will just reset the cart and display a confirmation message

  // Clear cart items and total
  cartItems.length = 0;
  cartTotal = 0;

  // Display confirmation message
  alert('Purchase confirmed! Thank you for shopping with us.');

  // Redirect back to the product page
  window.location.href = 'product.html';
}
