import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from './Header';

export default function ShareGroupCard({id, title, desc, author, watchers}) {
  return (
    <View key={id} style={styles.container}>
      <TouchableWithoutFeedback
        onClick={() => {
          console.log('TEST');
        }}>
        <View style={styles.contentContainer}>
          <View style={styles.shareGroupPicture} />

          <View style={styles.textContainer}>
            <Text style={styles.shareGroupTitle}>{title}</Text>
            <Text style={styles.shareGroupDesc}>{desc}</Text>

            <View style={styles.textBottomContainer}>
              <View style={styles.authorPicture} />
              <Text style={styles.authorText}>{author}</Text>
              <Text style={styles.watcherText}>{watchers} watchers</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 120,
    borderRadius: 15,
    marginBottom: 15,
  },
  shareGroupPicture: {
    backgroundColor: 'black',
    width: '40%',
    height: '100%',
    borderRadius: 15,
  },
  contentContainer: {
    flexWrap: 'wrap',
    height: '100%',
    width: '100%',
  },
  textContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '60%',
    height: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  shareGroupTitle: {
    color: '#242629',
    width: '100%',
    fontSize: 18,
    fontFamily: 'SourceSansPro-Bold',
    flexWrap: 'wrap',
  },
  shareGroupDesc: {
    flex: 1,
    color: '#ADADAD',
    width: '100%',
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
  },
  textBottomContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    bottom: 4,
    height: '20%',
    width: '100%',
  },
  authorText: {
    position: 'absolute',
    left: '19%',
    color: '#6473FF',
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
  },
  watcherText: {
    position: 'absolute',
    right: 0,
    color: '#6473FF',
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
  },
  authorPicture: {
    position: 'absolute',
    left: 0,
    backgroundColor: 'black',
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
