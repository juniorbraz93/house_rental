import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import New from '../../components/New';
import House from '../../components/House';
import Recommended from '../../components/Recommended';

export default function Home() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather name="search" size={24} color="#000" />
          <TextInput
            placeholder="O que está procurando?"
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.contentNew}>
        <Text style={styles.title}>Novidades</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollH}>
        <New
          cover={require('../../assets/images/house1.jpg')}
          name="Casa de Praia"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          price="R$ 1.204,90"
          onPress={() => navigation.navigate('Detail')}
        />
        <New
          cover={require('../../assets/images/house2.jpg')}
          name="Casa Floripa"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          price="R$ 2.400,90"
          onPress={() => navigation.navigate('Detail')}
        />
        <New
          cover={require('../../assets/images/house3.jpg')}
          name="Rancho SP"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          price="R$ 5.244,90"
          onPress={() => navigation.navigate('Detail')}
        />
      </ScrollView>

      <View style={styles.nextToYou}>
        <Text style={[styles.title, styles.title2]}>Próximo de você</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollH}>
        <House
          cover={require('../../assets/images/house1.jpg')}
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          price="R$ 1.204,90"
        />
        <House
          cover={require('../../assets/images/house6.jpg')}
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          price="R$ 2.254,90"
        />
        <House
          cover={require('../../assets/images/house5.jpg')}
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          price="R$ 3.264,90"
        />
      </ScrollView>

      <Text style={[styles.title, styles.title2]}>Dica do dia</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollH}>
        <Recommended
          cover={require('../../assets/images/house1.jpg')}
          house="Casa de Praia"
          offer="20%"
        />
        <Recommended
          cover={require('../../assets/images/house2.jpg')}
          house="Casa de Praia"
          offer="10%"
        />
        <Recommended
          cover={require('../../assets/images/house3.jpg')}
          house="Casa de Praia"
          offer="5%"
        />
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#FFF',
  },
  header: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20,
  },
  inputArea: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    backgroundColor: '#FFF',
    elevation: 2,
    // paddingHorizontal: 10,
    height: 37,
    borderRadius: 10,
  },
  input: {
    fontFamily: 'Montserrat-Medium',
    paddingHorizontal: 10,
    fontSize: 13,
    width: '90%',
  },
  contentNew: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    paddingHorizontal: 15,
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#4F4A4A',
  },
  title2: {
    marginTop: 20,
  },
  scrollH: {
    paddingHorizontal: 15,
  },
  nextToYou: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
