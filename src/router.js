import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Home from './pages/Home';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'ALUGUE',
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
            },

            headerRight: () => (
              <TouchableOpacity style={styles.shop}>
                <Feather name="shopping-bag" size={24} color="#000" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: 'Detalhes',
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
            },

            headerRight: () => (
              <TouchableOpacity style={styles.shop}>
                <Feather name="shopping-bag" size={24} color="#000" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

const styles = StyleSheet.create({
  shop: {
    marginRight: 15,
  },
});
