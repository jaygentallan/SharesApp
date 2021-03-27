import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Share,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../components/Header';

import ShareGroupCard from '../components/ShareGroupCard';

const DATA = [
  {
    id: '1',
    title: 'Title 1',
    desc: 'Desc 1',
    author: 'Author 1',
    watchers: '1',
  },
  {
    id: '2',
    title: 'Title 2',
    desc: 'Desc 2',
    author: 'Author 2',
    watchers: '2',
  },
  {
    id: '3',
    title: 'Title 3',
    desc: 'Desc 3',
    author: 'Author 3',
    watchers: '3',
  },
  {
    id: '4',
    title: 'Title 4',
    desc: 'Desc 4',
    author: 'Author 4',
    watchers: '4',
  },
  {
    id: '5',
    title: 'Title 5',
    desc: 'Desc 5',
    author: 'Author 5',
    watchers: '5',
  },
  {
    id: '6',
    title: 'Title 6',
    desc: 'Desc 6',
    author: 'Author 6',
    watchers: '6',
  },
];

export default function ShareGroup() {
  let items = [];
  console.log(DATA[0]);

  for (let i = 0; i < DATA.length; i++) {
    items.push(
      <ShareGroupCard
        key={DATA[i].key}
        title={DATA[i].title}
        desc={DATA[i].desc}
        author={DATA[i].author}
        watchers={DATA[i].watchers}
      />,
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.contentContainer}>
            <Text style={styles.shareGroupText}>Your Share Groups</Text>

            {DATA.map(item => (
              <ShareGroupCard
                title={item.title}
                desc={item.desc}
                author={item.author}
                watchers={item.watchers}
              />
            ))}

            <Text style={styles.pendingGroupText}>Pending Share Groups</Text>

            <View style={styles.placeholder} />
          </View>
        </ScrollView>
      </SafeAreaView>

      <TouchableOpacity style={styles.addButton}>
        <Ionicons name={'add'} size={40} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F1FF',
  },
  contentContainer: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 25,
  },
  shareGroupText: {
    color: '#242629',
    fontSize: 25,
    fontFamily: 'SourceSansPro-Bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 25,
    color: '#6473FF',
    fontFamily: 'SourceSansPro-Regular',
  },
  addButton: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    backgroundColor: '#6473FF',
    borderRadius: 30,
  },
  pendingGroupText: {
    color: '#242629',
    fontSize: 25,
    fontFamily: 'SourceSansPro-Bold',
    marginBottom: 10,
  },
  placeholder: {
    height: 200,
  },
});
