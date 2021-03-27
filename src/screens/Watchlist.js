import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Header from '../components/Header';

export default function Watchlist() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <Text style={styles.text}> Watchlist Screen </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    color: '#6473FF',
    fontFamily: 'SourceSansPro-Regular',
  },
});
