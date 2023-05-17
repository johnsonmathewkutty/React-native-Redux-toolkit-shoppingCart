import React from "react";
import { View,StyleSheet,Text,Image,TouchableHighlight} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removecart,increment,decrement} from "./reduxreducer/cartreducer";
import Home from './Home'
const Cart=({navigation})=>{
    const datas=useSelector(state=>state.addcart);
    const dispatch=useDispatch();
    console.log(datas)
    const removecarts=(item)=>{
        dispatch(removecart(item))
    }
    const quantitycontrol=(item)=>{
        dispatch(increment(item))
    }
    const quantitydecrement=(item)=>{
        dispatch(decrement(item))
    }
    return(
        <View style={styles.container}>
            <Text style={styles.cartheadtext}>Shopping Cart</Text>
            {datas.cartdata.length === 0 ?(
            <View style={styles.cartemptycontainer}>
                 <Text style={styles.emptycarttext}>Your Cart is currently Empty</Text>
                 <TouchableHighlight style={styles.emptycartbutton} onPress={()=>navigation.navigate(Home)}>
                    <Text style={styles.buttontextempty}>Continue Shopping</Text>
                    </TouchableHighlight>
            </View>
            ):(
                <View>
                    <View style={styles.carttitle}>
                     <Text style={styles.carttitles}>PRODUCT</Text>
                     <Text style={styles.carttitles}>PRICE</Text>
                     <Text style={styles.carttitles}>QUANTITY</Text>
                     <Text style={styles.carttitles}>TOTAL</Text>
                    </View>
                    <View>
                        {datas.cartdata.map((item)=>(
                         <View style={styles.cartcontent}>
                            <View>
                            <View style={styles.cartimgcontainer}>
                            <Image source={{uri:item.image}} style={styles.cartimg}></Image>
                            </View>
                            <Text style={styles.carttext}>{item.title}</Text>
                            </View>
                            <View style={styles.pricecontainer}>
                                <Text>${item.price}</Text>
                            </View>
                            <View style={styles.Quantitycontainer}>
                                <TouchableHighlight><Text style={styles.Quantitykeys} onPress={()=>quantitycontrol(item)}>+</Text></TouchableHighlight>
                                <Text style={styles.Quantitykeys}>{item.cartQuantity}</Text>
                                <TouchableHighlight><Text style={styles.Quantitykeys} onPress={()=>quantitydecrement(item)}>-</Text></TouchableHighlight>
                            </View>
                            <View style={styles.carttotal}>
                                <Text>{item.total}</Text>
                                
                            </View>
                            <TouchableHighlight style={styles.buttonremove} onPress={()=>removecarts(item)}><Text style={styles.buttontext}>Remove</Text></TouchableHighlight>
                         </View>

                        ))}
                    </View>
                </View>
            )}
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    cartheadtext:{
        fontSize:30,
        color:'#000',
        textAlign:'center',
        marginTop:20
    },
    carttitle:{
        flexDirection:'row',
        display:'flex',
        justifyContent:'space-around',
        marginTop:20,
        borderBottomWidth:2,
        borderBottomColor:'#979797',
    },
    carttitles:{
      color:'blue',
      fontSize:18,
      fontFamily:'sans-serif',
      fontWeight:'bold',
      marginBottom:5
    },
    cartemptycontainer:{
        alignItems:'center',
        marginTop:250
    },
    emptycarttext:{
        fontSize:25,
        color:'red',
        fontWeight:'bold',
        marginBottom:10,
        
    },
    emptycartbutton:{
        width:180,
        height:50,
        backgroundColor:'blue',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'
    },
    buttontextempty:{
        fontSize:15,
        fontWeight:'900',
        color:'#fff'
    },
    cartimgcontainer:{
        width:180,
        height:220,
        marginTop:10,
    },
    cartimg:{
        width:'40%',
        height:'40%'
    },
    carttext:{
        fontSize:15,
        color:'#000',
        marginTop:-130,
        marginRight:260,
    },
    cartcontent:{
     borderWidth:1,
     margin:5,
     flexDirection:'row',
     display:'flex',
     justifyContent:"space-between"
    },
    pricecontainer:{
       marginLeft:-270,
       marginTop:45,
    },
    Quantitycontainer:{
        marginTop:40,
        marginLeft:30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        borderWidth:1,
        width:90,
        height:35,
        borderColor:'#979797',

    },
    Quantitykeys:{
        fontSize:18,
        color:'#979797',
        fontWeight:'bold'

    },
    carttotal:{
        marginTop:45,
        marginLeft:40
    },
    buttonremove:{
        width:100,
        height:35,
        backgroundColor:'red',
        marginTop:110,
        borderRadius:5,
        justifyContent:'center',
        marginRight:30,
        marginLeft:-90
    },
    buttontext:{
        textAlign:'center',
        color:'#fff',
        fontSize:18
    }
})


export default Cart;