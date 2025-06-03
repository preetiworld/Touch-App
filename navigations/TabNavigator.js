import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const getIconName = (routeName) => {
  switch (routeName) {
    case 'Home':
      return 'home';
    case 'Search':
      return 'search';
    case 'Create':
      return 'plus-circle';
    case 'Reels':
      return 'film';
    case 'Profile':
      return 'user';
    default:
      return 'circle';
  }
};

// ✅ Moved outside to avoid defining it during render
const screenOptions = ({ route }) => {
  const iconName = getIconName(route.name);
  return {
    headerShown: false,
    tabBarStyle: { backgroundColor: '#ff00bf' },
    tabBarActiveTintColor: 'white',
    tabBarIcon: ({ color, size }) => (
      <Icon name={iconName} size={size} color={color} />
    ),
  };
};

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={HomeScreen} />
      <Tab.Screen name="Create" component={HomeScreen} />
      <Tab.Screen name="Reels" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
}
