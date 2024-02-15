import {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';

export default function Feed() {
  const [post, setPost] = useState();
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={post}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => (
          <Post key={item.id} listComments={item.comments} {...item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});
