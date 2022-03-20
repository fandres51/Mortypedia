import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CharactersScreen from './screens/CharactersScreen';
import PlacesScreen from './screens/PlacesScreen';
import EpisodesScreen from './screens/EpisodesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Characters" component={CharactersScreen} />
        <Tab.Screen name="Places" component={PlacesScreen} />
        <Tab.Screen name="Episodes" component={EpisodesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
