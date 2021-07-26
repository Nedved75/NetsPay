
document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const paymentId = urlParams.get('paymentId');



  if (paymentId) {
    const checkoutOptions = {
      checkoutKey: '3f79600f2f064ce998b1910486733bdd', // Replace!
      paymentId: paymentId,
      containerId: "checkout-container-div",

      //language
      language: "de-DE"
    };



    




    //const checkout = new Dibs.Checkout(checkoutOptions);
    var checkout = new Dibs.Checkout(checkoutOptions);
    var theme = {
      "backgroundColor": "#F2F2F2",
      "panelColor:": "white",
    };
    checkout.setTheme(theme);



    checkout.on('payment-completed', function (response) {
      window.location = 'completed.html';
    });
  } else {
    console.log("Expected a paymentId");   // No paymentId provided, 
    window.location = 'cart.html';         // go back to cart.html
  }
});