interface Product {
name:string,
type:string,
color:string,
price:number
}
import {ADD_TO_CART,REMOVE_FROM_CART} from './constant'
export const addToCart =(payload:Product)=>{
    return {
        type:ADD_TO_CART,
        data:payload
    }
}
export const removeFromCart =(payload:Product)=>{
    return {
        type:REMOVE_FROM_CART,
        data:payload
    }
}