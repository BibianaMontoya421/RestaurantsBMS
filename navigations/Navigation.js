import React from 'react'
import {NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from "@rneui/themed";


import RestaurantsStack from './RestaurantsStack'
import FavoritesStack from './FavoritesStack'
import TopRestaurantsStack from './TopRestaurantsStack'
import SearchStack from './SearchStack'
import AccountStack from './AccountStack'


const Tab = createBottomTabNavigator()

export default function Navigation() {
  const screenOptionp = (route, color)=>{
    let iconName
    switch(route.name){
      case "restaurants":
        iconName= "compass-outline"
        break;
      case "favorites":
        iconName= "heart-outline"
        break;
      case "toprestaurants":
        iconName= "star-outline"
        break;
      case "search":
        iconName= "magnify"
        break;
      case "account":
        iconName= "home-outline"
        break;
    }

    return(
      <Icon 
        type= "material-community"
        name={iconName}
        size={22}
        color={color}
      />   
      
      )

  }
  
  return (

    <NavigationContainer>
        <Tab.Navigator
          initialRouteName="restaurants"

          screenOptions = {({route})=>({
            tabBarInactiveTintColor:"#7aa274",
            tabBarActiveTintColor:"#dd7179",
            tabBarIcon:({color}) => screenOptionp(route,color)
          })}
        >

            <Tab.Screen
             name="restaurants"
             component={RestaurantsStack}
             options={{title:"Restaurantes"}}
            />
            <Tab.Screen
            name="favorites"
            component={FavoritesStack}
            options={{title:"Favoritos"}}
           />
           <Tab.Screen
           name="toprestaurants"
           component={TopRestaurantsStack}
           options={{title:"Top 5"}}
          />
          <Tab.Screen
          name="search"
          component={SearchStack}
          options={{title:"Busqueda"}}
         />
         <Tab.Screen
         name="account"
         component={AccountStack}
         options={{title:"Cuenta"}}
        />
        </Tab.Navigator>
    </NavigationContainer>


  )
  
}