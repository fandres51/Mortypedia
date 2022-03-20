import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Card from '../components/Card/Card';

export default function CharactersScreen() {

  const DATA = [
    {
      id: 1,
      name: 'Rick Sanchez',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    },
    {
      id: 2,
      name: 'Morty Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    },
    {
      id: 3,
      name: 'Summer Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    },
    {
      id: 4,
      name: 'Beth Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    },
    {
      id: 5,
      name: 'Jerry Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    },
    {
      id: 6,
      name: 'Rick Sanchez',
      image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
    },
    {
      id: 7,
      name: 'Morty Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
    },
    {
      id: 8,
      name: 'Summer Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
    },
    {
      id: 9,
      name: 'Beth Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
    },
    {
      id: 10,
      name: 'Jerry Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
    },
    {
      id: 11,
      name: 'Rick Sanchez',
      image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
    },
    {
      id: 12,
      name: 'Morty Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/12.jpeg',
    },
    {
      id: 13,
      name: 'Summer Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
    },
    {
      id: 14,
      name: 'Beth Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
    },
    {
      id: 15,
      name: 'Jerry Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
    },
    {
      id: 16,
      name: 'Rick Sanchez',
      image: 'https://rickandmortyapi.com/api/character/avatar/16.jpeg',
    },
    {
      id: 17,
      name: 'Morty Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg',
    },
    {
      id: 18,
      name: 'Summer Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
    },
    {
      id: 19,
      name: 'Beth Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
    },
    {
      id: 20,
      name: 'Jerry Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
    },
  ];

  const renderItem = ({item}) => (
    <Card name={item.name} image={item.image}></Card>
  );

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
}
