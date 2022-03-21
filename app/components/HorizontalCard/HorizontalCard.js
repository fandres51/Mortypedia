import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function HorizontalCard({name, episode, air_date}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.featuresContainer}>
        <Text style={styles.feature}>{episode}</Text>
        <Text style={styles.feature}>{air_date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3e3e3e',
    marginVertical: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 340,
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    maxHeight: 30,
    fontWeight: '600',
    color: 'white',
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  feature: {
    fontSize: 15,
    color: 'white',
  },
});
