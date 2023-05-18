import React from "react";
import Home from './src/Home'
import { Provider } from "react-redux";
import Store from "./src/store/Store";
import Cart from "./src/Cart";
import Login from "./src/Login";
import Register from './src/Register'

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  Icon from "react-native-vector-icons/MaterialIcons";


 


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
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown:false
          }}/> 
          <stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown:false
          }}/>
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
    </Provider>
  )
}

export default App;