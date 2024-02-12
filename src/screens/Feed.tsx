import {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';

export default function Feed() {
  const [post, setPost] = useState([
    {
      id: Math.random(),
      nickname: 'anderson de jesus',
      email: 'andreson1234@gmail.com',
      image: require('../../assets/imgs/boat.jpg'),
      comments: [
        {
          nickname: 'jhow arruda',
          comment: 'que lindo',
        },
        {
          nickname: 'pricila paiva',
          comment: 'saudades',
        },
        {
          nickname: 'mathues almeida',
          comment: 'cara aonde foi tirada',
        },
      ],
    },
    {
      id: Math.random(),
      nickname: 'marlom eric dos santos',
      email: 'marlomeric1234@gmail.com',
      image: require('../../assets/imgs/boat.jpg'),
      comments: [
        {
          nickname: 'jhow arruda',
          comment: 'que lindo',
        },
        {
          nickname: 'pricila paiva',
          comment: 'saudades',
        },
        {
          nickname: 'mathues almeida',
          comment: 'cara aonde foi tirada',
        },
      ],
    },
    {
      id: Math.random(),
      nickname: 'david de jesus santos',
      email: 'davinho2222@gmail.com',
      image: require('../../assets/imgs/boat.jpg'),
      comments: [],
    },
  ]);
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
