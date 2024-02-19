import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {CommentType} from '../types/Comments';
import UserTypes from '../types/user';
import AddComment from './AddComment';
import Author from './Author';
import Comments from './comments';

type props = {
  id: number;
  image: any;
  nickname: string;
  listComments: CommentType[];
};

export default function Post({
  id,
  image,
  listComments,
  nickname,
}: Readonly<props>) {
  const email = useSelector(({user}: {user: UserTypes}) => user.email);

  const addComment = email ? <AddComment postID={id} /> : null;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Author email={email} nickname={nickname} />
      <Comments listComments={listComments} />
      {addComment}
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
