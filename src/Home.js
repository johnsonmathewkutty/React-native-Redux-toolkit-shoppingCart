import React, { useEffect } from "react";
import { View,StyleSheet, ActivityIndicator,Text, TouchableHighlight,Image,ScrollView,FlatList} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getdatainfo } from "./reduxreducer/datareducer";
import { addcart } from "./reduxreducer/cartreducer";

const Home=({navigation})=>{
    const dispatch=useDispatch();
    const data=useSelector(state=>state.datainfo.data)
    const loading=useSelector(state=>state.datainfo.loading)
    const error=useSelector(state=>state.datainfo.error)
    useEffect(()=>{
        dispatch(getdatainfo())
    },[]);
    const cartadd=(item)=>{
        dispatch(addcart(item))
    }
    if(loading) return  <ActivityIndicator size={"large"} color='blue'/>
    if(error) return <Text>{error}</Text>
    return(
        <View style={styles.container}>
           <ScrollView>
            {/* {data.map((item)=>( */}
            <FlatList
            data={data}
            renderItem={({item})=>(
            <View style={styles.container1}>
                <View style={styles.img}>
             <View style={styles.imagecontainer}>
            <Image source={{uri:item.image}} style={styles.images}></Image>
            </View> 
            </View>      
            <Text style={styles.title} key={item.id}>{item.title}</Text>
             <TouchableHighlight style={styles.button}onPress={()=>cartadd(item)} ><Text style={styles.buttontext}>add to cart</Text></TouchableHighlight>
            </View>
            )}
            />
            {/* ))} */}
    
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eee'
    },
    container1:{
        width:'100%',
         borderWidth:1
    },
    title:{
        fontSize:20,
        color:'#000',
        fontWeight:'bold',
        marginTop:10,
        marginLeft:15,
        marginRight:5
    },
    imagecontainer:{
        width:'90%',
        height:350,
        backgroundColor:'#fff',
        marginLeft:20,
        borderRadius:8,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        
    },
    images:{
        width:'60%',
        height:'90%',
        marginBottom:10
    },
    button:{
        width:'40%',
        height:40,
        backgroundColor:'blue',
        borderRadius:4,
        alignItems:'center',
        justifyContent:'center',
        marginTop:5,
        marginBottom:10,
        marginLeft:200
    },
    buttontext:{
        fontSize:20,
        color:'#fff'
    }
})

export default Home;