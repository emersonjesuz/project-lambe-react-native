import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {CommentsType} from '../types/Comments';
import Author from './Author';
import Comments from './comments';
import AddComment from './AddComment';
import {ReactPropTypes} from 'react';

type props = {
  image: any;
  nickname: string;
  email: string;
  listComments: CommentsType[];
};

export default function Post({
  image,
  listComments,
  email,
  nickname,
}: Readonly<props>) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Author email={email} nickname={nickname} />
      <Comments listComments={listComments} />
      <AddComment />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').width * 3) / 4,
    resizeMode: 'contain',
  },
});
