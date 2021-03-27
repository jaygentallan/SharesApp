/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ShareGroup from './src/screens/ShareGroup';
import Navigation from './src/navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import NavigationBar from 'react-native-navbar-color';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const setNavigationColor = color => {
    NavigationBar.setColor(color);
  };

  const setStatusBarColor = (color, animation) => {
    NavigationBar.setStatusBarColor(color, animation);
  };

  const setStatusBarTheme = (theme, animation) => {
    NavigationBar.setStatusBarTheme(theme, animation);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      {setNavigationColor('#FFFFFF')}
      {setStatusBarTheme('dark', false)}
      <Navigation />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
