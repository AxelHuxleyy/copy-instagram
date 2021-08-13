import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Probando from '../screens/probando'
import HomeScreen from '../screens/HomeScreen'
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab= createBottomTabNavigator();

const Tabs = () => {


    return (  
        <Tab.Navigator >
            <Tab.Screen name="home" options={{
                tabBarActiveTintColor:'black',
                tabBarInactiveTintColor:'#5e544f',
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Icon name='home' color={color} size={size} />
                ),
                tabBarShowLabel:false,
                
            }}  component={HomeScreen} />
            <Tab.Screen name="search" options={{
                tabBarActiveTintColor:'black',
                tabBarInactiveTintColor:'#5e544f',
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Icon name='search' color={color} size={size} />
                ),

                tabBarShowLabel:false
            }}  component={HomeScreen} />
            
            
        </Tab.Navigator>
    );
}
 
export default Tabs;