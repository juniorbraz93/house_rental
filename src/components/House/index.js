import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function House(props) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={props.cover} style={styles.cover} />
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.price}>{props.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 260,
    height: 70,
    backgroundColor: '#FFF',
    elevation: 2,
    padding: 6,
    marginVertical: 5,
    marginRight: 2,
    marginLeft: 2,
    borderRadius: 10,
  },
  cover: {
    borderRadius: 10,
    width: 60,
    height: 60,
  },
  content: {
    width: '65%',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    height: '100%',
  },
  description: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
  },
  price: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
  },
});
