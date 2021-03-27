import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Watchlist from '../screens/Watchlist';
import ShareGroup from '../screens/ShareGroup';
//import Map from '../screens/Map';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const Navigation = (): Node => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          size = 26;

          if (route.name === 'Watchlist') {
            iconName = focused ? 'file-tray-full' : 'file-tray-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          if (route.name === 'Map') {
            return <Ionicons name={iconName} size={28} color={color} />;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#6473FF',
        inactiveTintColor: '#6473FF',
        style: {
          height: '6.5%',
          paddingTop: 5,
        },
      }}>
      <Tab.Screen name="Watchlist" component={ShareGroup} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Navigation;
