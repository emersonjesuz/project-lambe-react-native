import {FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../components/Header';
import Post from '../components/Post';

export default function Feed() {
  const list = useSelector(({posts}: {posts: any}) => posts.posts);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={list}
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
