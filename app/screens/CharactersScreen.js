import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Card from '../components/Card/Card';

export default function CharactersScreen({navigation}) {
  const [characters, setCharacters] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const getCharacters = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const json = await response.json();
      setCharacters(
        json.results.map(result => {
          return {
            name: result.name,
            image: result.image,
            id: result.id,
            species: result.species,
            gender: result.gender,
            origin: result.origin.name,
            location: result.location.name,
          };
        }),
      );
      //   console.log(
      //     '\n\n',
      //     json.results.map(result => {
      //       return {name: result.name, image: result.image, id: result.id};
      //     }),
      //   );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const showDetails = character => {
    navigation.navigate('Details', character);
  };

  React.useEffect(() => {
    getCharacters();
  }, []);

  const renderItem = ({item}) => (
    <Card
      name={item.name}
      image={item.image}
      onpress={() => showDetails(item)}></Card>
  );

  return (
    <View style={styles.container}>
      {!loading ? (
        <FlatList
          data={characters}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={3}
        />
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252526',
  },
});
