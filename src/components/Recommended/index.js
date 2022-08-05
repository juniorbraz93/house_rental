import React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';

export default function Recommended(props) {
  return (
    <ImageBackground
      source={props.cover}
      style={styles.container}
      blurRadius={3}>
      <Text style={[styles.house, styles.shadow]}>{props.house}</Text>
      <Text style={[styles.description, styles.shadow]}>{props.offer} OFF</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 230,
    height: 130,
    marginRight: 20,
    marginBottom: 40,
    opacity: 0.8,
    backgroundColor: '#000',
    marginLeft: 3,
    padding: 12,
    marginTop: 20,
  },
  house: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    color: '#FFF',
  },
  description: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    color: '#FFF',
  },
  shadow: {
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 3,
    textShadowColor: '#000',
  },
});
