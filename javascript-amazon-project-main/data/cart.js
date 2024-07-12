export const cart =[];

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
          quantity : 1  //if not there then add cart
        });
      }
 };