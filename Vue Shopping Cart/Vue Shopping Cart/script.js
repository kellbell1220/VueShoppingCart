var app = new Vue ({
  el: '#app',
  data: {
    itemSelected: "None Yet",
    cartItem: 0,
    empty:true,
    full: false,
    items :
      [
        {name: "PSE Brute X", ordered: 0, imgSrc : "brutex.jpg", price: 249.99, qty: 5, qtyOrdered: 0, description: 'Shoots up to 332 fps and renders a smooth, comfortable draw with 80% let-off so you hold on to your target.'},
        {name: "PSE Madness", ordered: 0, imgSrc: "madness.jpg", price: 349.99, qty: 5, qtyOrdered: 0, description: 'High-performance compound bow built with an exclusive angled-plane riser that delivers an ultra-stable shot. This bow is 32-1/4” axle-to-axle and a shooting speed of 340 fps with 80% let-off!'},
        {name: "PSE Stinger", ordered: 0, imgSrc:"stinger.jpg", price: 599.99, qty: 5, qtyOrdered: 0, description: 'Features a 7-1/8" brace ht., 32-1/2" axle-to-axle measurement and 75% letoff. Innovative X-Tech™ split limbs and highly adjustable SX cam.'},
        {name: "PSE Wave", ordered: 0, imgSrc: "wave.jpg",price: 499.99, qty: 5, qtyOrdered: 0, description: 'Features a lightweight split limb design. Bowfishing optimized HP cams and can be snap shot like a recurve. Designed to perform like no other bowfishing bow ever built.'},
        {name: "PSE Youth Edition", ordered: 0, imgSrc: "youth.jpg", price: 99.99, qty: 5, qtyOrdered: 0, description: 'Ideal for young archers. With a draw length of 16.5" to 26", this bow is ideal for youth 10 years of age and older. Compound bow is 12 to 29 lbs, making it a good choice for target practice. '}

      ]
  },
  methods: {
    itemSelect(theItem){
      this.itemSelected = theItem;
    },

    emptyCartSyndrome(cartItem){
      if(cartItem === 0){
        empty = true;
      }
      else{
         full = true;
      }
    },

    orderThis(theItem){
      this.cartItem++;
      theItem.ordered++;
      theItem.qty--;
      theItem.qtyOrdered++;
      // calculateOrder(theItem);
    },
    removeThis(theItem){
      theItem.ordered = -1;
      this.cartItem--;
      theItem.qty++;
      theItem.qtyOrdered--;
    },

    // calculateOrder(theItem) {
    //
    //   //Figuring Tax
    //   var tax = (total * .07);
    //   //Figuring Grand Total for the order
    //   var grandTotal = (total + tax);
    //
    //   for(this.itemSelected){
    //       var total = (theItem.qtyOrdered * theItem.price);
    //       var newTotal = newTotal + total;
    //   }
    //
    //   document.getElementById('totals').innerHTML += '<h3>Subtotal: ' + newTotal + '</h3></br>';
    //   document.getElementById('totals').innerHTML += '<h3>Tax: ' + tax + '</h3></br>';
    //   document.getElementById('totals').innerHTML += '<h3>Subtotal: ' + grandTotal + '</h3></br>';
    // }
  }
})
