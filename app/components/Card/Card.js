import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function Card({name, image, onpress}) {

  return (
    <TouchableOpacity style={styles.container} onPress={onpress}>
      <View>
        <Image style={styles.image} source={{uri: image}}></Image>
      </View>
      <View style={styles.txtContainer}>
        <Text style={styles.txt}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 8,
    borderRadius: 10,
    backgroundColor: '#3e3e3e',
    width: 110,
    height: 150,
    alignItems: 'center'

  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  txt: {
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 7,
    maxHeight: 37,
    color: 'white'
  }
});
