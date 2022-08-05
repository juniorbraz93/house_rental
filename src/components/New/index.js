import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function New(props) {
  return (
    <>
      <TouchableOpacity onPress={props.onPress} style={styles.container}>
        <Image source={props.cover} style={styles.cover} />
        <View style={styles.content}>
          <Text style={styles.title}>{props.name}</Text>

          <View style={styles.dot} />
          <Text style={styles.badge}>Novo</Text>
        </View>
        <Text style={styles.description}>{props.description}</Text>
        <View style={styles.footer}>
          <View style={styles.priceView}>
            <Text style={styles.price}>{props.price}</Text>
          </View>
          <View style={styles.iconView}>
            <Ionicons name="ios-add-circle" size={24} color="#000" />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#FFF',
    height: 250,
    width: 200,
    elevation: 2,
    borderRadius: 10,
    padding: 10,
    marginRight: 30,
    marginLeft: 2,
    marginBottom: 5,
  },
  cover: {
    width: 170,
    height: 110,
    borderRadius: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    color: '#4F4A4A',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: 'red',
    marginHorizontal: 4,
  },
  badge: {
    color: 'red',
    fontFamily: 'Montserrat-Bold',
    fontSize: 10,
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    color: '#4F4A4A',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    width: '100%',
  },
  priceView: {
    width: '80%',
  },
  price: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
  },
  iconView: {
    width: '20%',
  },
});
