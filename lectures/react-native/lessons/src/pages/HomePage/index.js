import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Stats from './commons/Stats';
import Header from './commons/Header';

const HomePage = () => {
  return (
    <LinearGradient
      colors={['#0057b8', '#fff', '#ffd600']}
      start={{x: 0.0, y: 0.3}}
      end={{x: 0.7, y: 1.0}}
      locations={[0, 0.45, 0.75]}
      style={styles.linearGradient}>
      <Header />
      <Stats />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    padding: 15,
  },
});

export default HomePage;
