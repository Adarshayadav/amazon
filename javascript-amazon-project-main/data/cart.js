export let cart;

loadFromStorage();
//default values |
export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'));
  if (!cart) {
    cart = [{
      productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity : 2,
      deliveryOptionId : '1'
    },{
      productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity : 1,
      deliveryOptionId : '2' 
    }];
  }
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

 export function addToCart(productId){
  let matchingItem;
      //This is the interactive js code 
      cart.forEach((cartItem) => {
        if (productId === cartItem.productId){
          matchingItem = cartItem;//here checking product is there antha 
        }
      });

      if(matchingItem){
        matchingItem.quantity +=1; //if product is thre then increase by 1 quantity
      }else{
        cart.push({
          productId : productId,
          quantity : 1 , //if not there then add cart
          deliveryOptionId : '1'
        });
      }
      saveToStorage();
 };


 export function removeFromCart(productId){
  const newCart =[];
  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
    newCart.push(cartItem);
    }
  })

  cart = newCart;

  saveToStorage();
 };

 export function updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;
        //This is the interactive js code 
        cart.forEach((cartItem) => {
          if (productId === cartItem.productId){
            matchingItem = cartItem;//here checking product is there antha 
          }
        });

        matchingItem.deliveryOptionId = deliveryOptionId;
        saveToStorage();
 };


 export let products = [];

 export function loadCart(fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
     console.log(xhr.response);
    // console.log('load products');

    fun();//running renderProductsGrid in amazon.js
  })

  xhr.open('GET', 'https://supersimplebackend.dev/cart');
  xhr.send();//asynchronous
 };
 