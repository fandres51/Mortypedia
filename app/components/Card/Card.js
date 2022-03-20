import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Card({name, image}) {

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri: image}}></Image>
      </View>
      <View style={styles.txtContainer}>
        <Text style={styles.txt}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  image: {
    width: 100,
    height: 100
  }
});
