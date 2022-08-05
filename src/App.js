import * as React from 'react';
import {StatusBar} from 'react-native';
import Routes from './router';

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#000" transLucent={false} />
      <Routes />
    </>
  );
}
