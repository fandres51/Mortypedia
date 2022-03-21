import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import CharactersScreen from './CharactersScreen';
import EpisodesScreen from './EpisodesScreen';
import PlacesScreen from './PlacesScreen';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Characters" component={CharactersScreen} />
      <Tab.Screen name="Places" component={PlacesScreen} />
      <Tab.Screen name="Episodes" component={EpisodesScreen} />
    </Tab.Navigator>
  );
}
