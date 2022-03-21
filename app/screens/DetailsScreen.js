import React from 'react';
import {View, Text} from 'react-native';
import CharacterDescription from '../components/CharacterDescription';

export default function DetailsScreen(route) {
  const character = route.route.params;

  return (
    <View>
      <CharacterDescription character={character}></CharacterDescription>
    </View>
  );
}
