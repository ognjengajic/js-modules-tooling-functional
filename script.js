//Importing module
//import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
//console.log(price, tq);
//addToCart(`bread`, 5);
//console.log(shoppingCost);

console.log(`Importing module`);

/*
import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart(`bread`, 5);
console.log(ShoppingCart.totalPrice);
*/
//console.log(price);
//import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
import add, { cart } from './shoppingCart.js';
add(`pizza`, 2);
add(`apples`, 1);
add(`bread`, 5);

console.log(cart);

/*
console.log(`start fetching`);
const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data = await res.json();

console.log(data);
console.log(`Something`);
*/

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
