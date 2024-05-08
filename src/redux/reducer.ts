import {ADD_TO_CART,REMOVE_FROM_CART} from './constant'
export const cartData =(data=[],action)=>{
   switch(action.type){
    case ADD_TO_CART:
        //add to cart logic
        return [action.data,...data]
    case REMOVE_FROM_CART:
        //add to cart logic
        data.length = data.length ? data.length -1 : data
        return [...data]
        default:
            // no case match
            return data
   }
}