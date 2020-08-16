import React from 'react';
import {View, StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';

import rainbow from './rainbow.json';

export default function App() {
  return (
    <View style={styles.container}>
      <Lottie
        style={styles.animation}
        // resizeMode="contain"
        autoSize
        source={rainbow}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    height: 200,
    width: 200,
  },
});
