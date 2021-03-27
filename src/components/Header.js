import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {vw, vh} from 'react-native-viewport-units';

const Header = (): Node => {
  return (
    <View style={styles.header}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View>
        <Text style={styles.headerText}> Shares </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    zIndex: 1,
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '7.5%',
    paddingLeft: '5%',
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    fontFamily: 'SourceSansPro-Bold',
    fontWeight: '800',
    fontSize: 25,
    color: '#6473FF',
    letterSpacing: 0.5,
    textAlign: 'left',
  },
});

export default Header;
