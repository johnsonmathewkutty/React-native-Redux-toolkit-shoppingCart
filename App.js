import React from "react";
import Home from './src/Home'
import { Provider } from "react-redux";
import Store from "./src/store/Store";


import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  Icon from "react-native-vector-icons/MaterialIcons";
import Cart from "./src/Cart";

  // extensions imported for Asyncstorage

// import Store from "./src/store/Store";
// import persistStore from "redux-persist/es/persistStore";
// import { PersistGate } from "redux-persist/integration/react";
// let presist=persistStore(Store);


 function Mytab(){
  const bottomtab=createBottomTabNavigator()
  return(
    <bottomtab.Navigator>
      <bottomtab.Screen name="Home" component={Home}
      options={{
        headerShown:false,
        tabBarActiveBackgroundColor:'#eee',
        tabBarActiveTintColor:'green',
        tabBarInactiveTintColor:'blue',
        tabBarIcon:({focused})=>
        focused ? <Icon name="home" color='green'  size={24} />:<Icon name='home' color='red'  size={24} />
      }}
      />
      <bottomtab.Screen name="Cart"  component={Cart}
      options={{
        headerShown:false,
        tabBarActiveBackgroundColor:'#eee',   
        tabBarActiveTintColor:'grren',
        tabBarInactiveTintColor:'blue',
        tabBarIcon:({focused})=>
        focused ? <Icon name='shopping-cart' color='green'  size={24} />:<Icon name='shopping-cart' color='red'  size={24} />
        }}
        />
    </bottomtab.Navigator>
  )
}

const App=()=>{
  const stack=createStackNavigator()
  return(
     <Provider store={Store}>
      {/* <PersistGate persistor={presist}> .. code for asyncstorage*/}
      <NavigationContainer>
        <stack.Navigator> 
          <stack.Screen
          name="Mytab"
          component={Mytab}
          options={{
            headerShown:false
          }}/>
          <stack.Screen
          name="Home"
          component={Home}/>
          <stack.Screen
          name="Cart"
          component={Cart}/>
        </stack.Navigator>
      </NavigationContainer>
      {/* </PersistGate> ..code for Asyncstorage */}
    </Provider>
  )
}


export default App;