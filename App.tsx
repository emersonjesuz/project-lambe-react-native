import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import Header from './src/components/Header';
import Post from './src/components/Post';
import Feed from './src/screens/Feed';

function App(): React.JSX.Element {
  const listComments = [
    {
      nickname: 'anderson',
      comment: 'muito bom',
    },
    {
      nickname: 'jose filho almeida',
      comment: 'que horrivel ',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <Feed />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
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
