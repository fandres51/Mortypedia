import React from 'react';
import {View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import HorizontalCard from '../components/HorizontalCard/HorizontalCard';

export default function EpisodesScreen() {
  const [episodes, setEpisodes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const getEpisodes = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/episode');
      const json = await response.json();
      setEpisodes(
        json.results.map(result => {
          return {
            id: result.id,
            name: result.name,
            air_date: result.air_date,
            episode: result.episode,
          };
        }),
      );
      // console.log(
      //   '\n\n',
      //   json.results.map(result => {
      //     return {
      //       id: result.id,
      //       name: result.name,
      //       air_date: result.air_date,
      //       episode: result.episode,
      //     };
      //   }),
      // );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getEpisodes();
  }, []);

  const renderItem = ({item}) => (
    <HorizontalCard
      name={item.name}
      episode={item.episode}
      air_date={item.air_date}></HorizontalCard>
  );

  return (
    <View style={styles.container}>
      {!loading ? (
        <FlatList
          data={episodes}
          renderItem={renderItem}
          keyExtractor={item => item.id}
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
