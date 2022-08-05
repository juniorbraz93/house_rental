import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SwiperContent from '../../components/Swiper';
import Stars from 'react-native-stars';

export default function Detail() {
  return (
    <View style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperContent />
      </View>
      <View style={styles.headerContent}>
        <View style={styles.titleHeader}>
          <Text style={styles.house}>Casa de Praia</Text>
        </View>

        <View style={styles.starAvaliation}>
          <Text style={styles.rating}>Avaliações</Text>
          <View style={styles.stars}>
            <Stars
              default={4}
              count={5}
              half={true}
              starSize={20}
              fullStar={
                <Ionicons name="md-star" size={24} style={styles.myStar} />
              }
              emptyStar={
                <Ionicons
                  name="md-star-outline"
                  size={24}
                  style={styles.myStar}
                />
              }
              halfStar={
                <Ionicons name="md-star-half" size={24} style={styles.myStar} />
              }
            />
          </View>
        </View>
      </View>
      <Text style={styles.price}>R$ 1.204,90</Text>
      <Text style={styles.description}>
        Casa nova uma quadra do mar, lugar seguro e monitorado 24horas.
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollH}>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/images/house4.jpg')}
            style={styles.img}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/images/house5.jpg')}
            style={styles.img}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/images/house6.jpg')}
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
            source={require('../../assets/images/house1.jpg')}
            style={styles.img}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/images/house3.jpg')}
            style={styles.img}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  swiperContent: {
    flexDirection: 'row',
    height: 340,
    width: '100%',
  },
  headerContent: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  house: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#4F4A4A',
  },
  titleHeader: {
    width: '65%',
  },
  starAvaliation: {
    width: '35%',
  },
  rating: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    color: '#4F4A4A',
  },
  stars: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  myStar: {
    color: '#E7A74E',
    backgroundColor: 'transparent',
    textShadowColor: '#000',
    extShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  price: {
    paddingHorizontal: 20,
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: '#000',
  },
  description: {
    fontFamily: 'Montserrat-Medium',
    paddingHorizontal: 20,
    fontSize: 14,
    color: '#B3AEAE',
    lineHeight: 20,
    marginTop: 20,
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    height: 90,
    borderRadius: 8,
    marginRight: 15,
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  scrollH: {
    paddingHorizontal: 15,
    marginTop: 35,
  },
});
