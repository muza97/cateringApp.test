import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ico-material-design';

// Import your screens
import HomeScreen from './Screens/HomeS';
import Favorite from './Screens/Fav';
import Catering from './Screens/Catering';
import Cake from './Screens/Cake';
import User from './Screens/User';
import Settings from './Screens/Settings';
import Chat from './Screens/ChatS'; // Changed ChatS to Chat based on your export

// Create bottom tab navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home-button';
            } else if (route.name === 'Favorite') { // Changed from 'Fav' to 'Favorite'
              iconName = 'favorite-heart-button';
            } else if (route.name === 'Catering') {
              iconName = 'burn-button';
            } else if (route.name === 'Cake') {
              iconName = 'birthday-cake';
            } else if (route.name === 'User') {
              iconName = 'user-shape';
            } else if (route.name === 'Settings') {
              iconName = 'settings-cogwheel-button';
            } else if (route.name === 'Chat') { // Changed from 'ChatS' to 'Chat'
              iconName = 'chat-bubble';
            }
            // Return the icon component
            return <Icon name={iconName} height={26} width={26} color={color} />;
          },
          tabBarActiveTintColor: '#2962ff',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favorite" component={Favorite} />
        <Tab.Screen name="Catering" component={Catering} />
        <Tab.Screen name="Cake" component={Cake} />
        <Tab.Screen name="User" component={User} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Chat" component={Chat} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
