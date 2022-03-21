import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

export default function CharacterDescription({character}) {
  return (
    <View>
      <ScrollView>
        <View>
          <Image style={styles.img} source={{uri: character.image}}></Image>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{character.name}</Text>
          </View>
          <View style={styles.feattureContainer}>
            <Text style={styles.featureTitle}>Gender:</Text>
            <Text style={styles.feature}>{character.gender}</Text>
          </View>
          <View style={styles.feattureContainer}>
            <Text style={styles.featureTitle}>Species:</Text>
            <Text style={styles.feature}>{character.species}</Text>
          </View>
          <View style={styles.feattureContainer}>
            <Text style={styles.featureTitle}>Origin:</Text>
            <Text style={styles.feature}>{character.origin}</Text>
          </View>
          <View style={styles.feattureContainer}>
            <Text style={styles.featureTitle}>Actual Location:</Text>
            <Text style={styles.feature}>{character.location}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    padding: 30,
  },
  img: {
    width: '100%',
    height: 400,
  },
  name: {
    fontSize: 40,
    fontWeight: '600',
    color: 'black',
    marginBottom: 20,
  },
  featureTitle: {
    fontWeight: '600',
    color: 'black',
    fontSize: 22,
  },
  feature: {
    fontSize: 18,
    marginVertical: 10,
  },
});
