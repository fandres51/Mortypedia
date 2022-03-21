import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import CharactersScreen from '../screens/CharactersScreen';
import EpisodesScreen from '../screens/EpisodesScreen';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Characters') {
            iconName = focused
              ? require('../assets/Icons/outline_groups_blue_24dp.png')
              : require('../assets/Icons/outline_groups_white_24dp.png')
          } else if (route.name === 'Episodes') {
            iconName = focused 
              ? require('../assets/Icons/outline_format_list_bulleted_blue_24dp.png') 
              : require('../assets/Icons/outline_format_list_bulleted_white_24dp.png')
          }

          // You can return any component that you like here!
          return <Image source={iconName} style={{width: 20, height: 20}}></Image>;
        },
        tabBarActiveTintColor: '#007acc',
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: "#252526",
        tabBarInactiveBackgroundColor: "#252526",
        headerShown: false,
      })}>
      <Tab.Screen name="Characters" component={CharactersScreen} />
      <Tab.Screen name="Episodes" component={EpisodesScreen} />
    </Tab.Navigator>
  );
}
