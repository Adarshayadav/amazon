export const cart =[{
  productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity : 2
},{
  productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity : 1
}];

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