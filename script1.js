// ...Existing code...

// Add event listener to the "Add to Cart" button
document.querySelector('.add-to-cart').addEventListener('click', addToCart);

// Add event listener to the "Buy" button
document.querySelector('.buy').addEventListener('click', redirectToCheckout);

// ...Existing code...

function redirectToCheckout() {
  // Store cart data in localStorage to access it on the checkout page
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  localStorage.setItem('cartTotal', cartTotal.toFixed(2));

  // Redirect to the checkout page
  window.location.href = 'checkout.html';
}
