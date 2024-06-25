import createItem from './services/item.js';
import * as cartService from './services/cart.js';

const myCart = [];
const myWishList = [];

const item1 = await createItem("Livro", 3.99, 4);
const item2 = await createItem("Caderno", 9.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.rmvItem(myCart, 2);
await cartService.delItem(myCart, 1);

console.log("Welcome to your SHOPEE Cart: ");
await cartService.displayCart(myCart);
console.log("Total SHOPEE Cart: ");
await cartService.calcTotal(myCart);