

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Feather from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import NewPost from '../pages/NewPost';
import PostsUser from '../pages/PostsUser';
import Bula from '../pages/Bula/bula';
import Rendimento from '../pages/Rendimentos';
import Rendimentos from '../pages/Rendimentos';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen 
      name="NewPost" 
      component={NewPost}
      options={{
       headerTintColor: '#FFF',
        headerStyle: {
          backgroundColor: '#36393f'
      }
    }}
    />
     

      <Stack.Screen name="PostsUser" component={PostsUser} />
    </Stack.Navigator>
  );
}

function AppRoutes() {
  return (
    <Tab.Navigator
    screenOptions={{
      keyboardHidesTabBar: true,
      showLabel: false,
      style:{
        backgroundColor: '#202225',
        borderTopWidth: 0,
      },
 
      activeTintColor: '#FFF'
    }}
    >
       <Tab.Screen 
       name="Home" 
       component={StackScreen} 
       options={{ headerShown: false,
         tabBarIcon: ({ color, size })  => {
       
          return <Feather name="home" color={color} size={size} />
         }
       }}
       />

<Tab.Screen 
       name="Bulas" 
       component={Bula} 
       options={{ headerShown: false,
         tabBarIcon: ({ color, size })  => {
       
          return <Feather name="file-plus" color={color} size={size} />
         }
       }}
       />

       <Tab.Screen 
       name="Saldo" 
       component={Rendimentos} 
       options={{ headerShown: false,
          tabBarIcon: ({ color, size }) => {
          return <Feather name="dollar-sign" color={color} size={size} />
          }
        }}       
       />

       <Tab.Screen 
       name="Profile" 
       component={Profile} 
       options={{ headerShown: false,
          tabBarIcon: ({ color, size }) => {
            
          return <Feather name="user" color={color} size={size} />
          }
        }}       
       />
   </Tab.Navigator>
  );
}

export default AppRoutes;