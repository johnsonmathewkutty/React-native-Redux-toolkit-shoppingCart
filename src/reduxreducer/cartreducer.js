import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cartdata:[],
    carttotalQuantity:0,
   carttotalAmount:0,
};


const cartSlice=createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        addcart:(state,action)=>{
           
              const itemindex = state.cartdata.findIndex((items)=>items.id === action.payload.id);
              
              if(itemindex>=0){
                  state.cartdata[itemindex].cartQuantity +=1
                  state.cartdata[itemindex].total +=action.payload.price
              }
              else
                {
             state.cartdata.push({...action.payload, cartQuantity:1, total:action.payload.price });

                };  


    },
    removecart:(state,action)=>{
      const removeindex=state.cartdata.filter((item)=>item.id !== action.payload.id)
       state.cartdata=removeindex;
    },
    increment:(state,action)=>{
          const itemindex=state.cartdata.findIndex((item)=>item.id === action.payload.id)
          state.cartdata[itemindex].cartQuantity +=1;
          state.cartdata[itemindex].total +=action.payload.price
      },
   decrement:(state,action)=>{
        const itemindex=state.cartdata.findIndex((item)=>item.id === action.payload.id)
        
        if(state.cartdata[itemindex].cartQuantity>1){
          state.cartdata[itemindex].cartQuantity -=1;
          state.cartdata[itemindex].total -=action.payload.price
        }
    else
        {
          const removeindex=state.cartdata.filter((item)=>item.id !== action.payload.id)
          
        state.cartdata=removeindex
        }
    }
    
  }
})

export const {addcart,removecart,increment,decrement}=cartSlice.actions
export default cartSlice.reducer