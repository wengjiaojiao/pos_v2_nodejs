var Cart = require('./model/cart');
var Scanner = require('./model/scanner');
var Pos = require('./model/pos');

function printInventory(inputs){
    var cart = new Cart();

    inputs.forEach(function(input) {
        cart.addCartItem(Scanner.splitTag(input));
    })

    for(var i = 0; i < cart.cartBasket.length; i++) {
        cart.cartBasket[i].getSubtotal();
    }

    var pos = new Pos();
    return pos.getInfo(cart);
}
module.exports = printInventory;
