import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';

export default function SwiperContent() {
  return (
    <Swiper
      style={styles.wrapper}
      dotStyle={styles.dot}
      activeDotColor="#FFF"
      activeDotStyle={styles.activeDot}>
      <View style={styles.slide}>
        <Image
          source={require('../../assets/images/house1.jpg')}
          style={styles.img}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../../assets/images/house2.jpg')}
          style={styles.img}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../../assets/images/house3.jpg')}
          style={styles.img}
        />
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  dot: {
    backgroundColor: '#000',
    borderColor: '#000',
    borderWidth: 1,
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  activeDot: {
    borderColor: '#000',
    borderWidth: 1,
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  img: {
    width: '100%',
    height: 400,
  },
});
