import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'react-native-axios'


const getdatainfo=createAsyncThunk('data/api',()=>{
   return axios.get('https://fakestoreapi.com/products')
    .then(response=>{
      return (response.data)
    })

    }
)

const datareducerSlice=createSlice({
    name:'data',
    initialState:{
        data:[],
        loading:false,
        error:''
    },
    extraReducers:builder=>{
    builder.addCase(getdatainfo.pending,(state)=>{
            state.loading=true
        }),
        builder.addCase(getdatainfo.fulfilled,(state,action)=>{
              state.loading=false
            state.data=action.payload
        }),
        builder.addCase(getdatainfo.rejected,(state,action)=>{
            state.loading=false
            state.error='something went wrong'
        })
    }
    
})


export {getdatainfo};
export default datareducerSlice.reducer;