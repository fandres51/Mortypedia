import * as React from 'react';
import TabNav from './TabNav';
import DetailsScreen from '../screens/DetailsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={TabNav}
        options={{
          title: 'Mortypedia',
          headerStyle: {
            backgroundColor: '#252526',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({route}) => ({
          title: route.params.name,
          headerStyle: {
            backgroundColor: '#3e3e3e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
    </Stack.Navigator>
  );
}
