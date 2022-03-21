import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import CharactersScreen from './CharactersScreen';
import EpisodesScreen from './EpisodesScreen';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        activeBackgroundColor: '#252526',
        inactiveBackgroundColor: '#252526',
        activeTintColor: '#007acc',
        inactiveTintColor: 'white',
        style: {
          backgroundColor: '#252526',
          paddingBottom: 3,
        },
      }}
      >
      <Tab.Screen name="Characters" component={CharactersScreen} />
      <Tab.Screen name="Episodes" component={EpisodesScreen} />
    </Tab.Navigator>
  );
}
