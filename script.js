//Importing module
//import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
//console.log(price, tq);
//addToCart(`bread`, 5);
//console.log(shoppingCost);

//console.log(`Importing module`);

/*
import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart(`bread`, 5);
console.log(ShoppingCart.totalPrice);
*/
//console.log(price);
//import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

/*
console.log(`start fetching`);
const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data = await res.json();

console.log(data);
console.log(`Something`);
*/
/*
const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(getLastPost);

//not very clean
//lastPost.then(last => console.log(last));

//top level await
const lastPost2 = await getLastPost();
console.log(lastPost2);

*/
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shoppingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from suplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart(`apple`, 4);
ShoppingCart2.addToCart(`pizza`, 4);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shoppingCost);
*/

/*
//CommonJS
//Export
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

//Import
const {addToCart} = require(`./shoppingCart.js`);
*/

import add, { cart } from './shoppingCart.js';
add(`pizza`, 2);
add(`apples`, 1);
add(`bread`, 5);

console.log(cart);

//import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';
//import cloneDeep from 'lodash';

const state = {
  cart: [
    { product: `pizza`, quantity: 5 },
    { product: `apple`, quantity: 2 },
  ],
  user: { loggedIn: true },
};

//Shallow copy
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = `Hey`;
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting} ${this.name}`);
  }
}

const ogi = new Person(`Ogi`);
console.log(`Jonas` ?? null);

console.log(cart.find(el => el.quantity >= 1));
Promise.resolve(`TEST`).then(x => console.log(x));

import 'core-js/stable';

//Polifilling async functions
import 'regenerator-runtime/runtime';
