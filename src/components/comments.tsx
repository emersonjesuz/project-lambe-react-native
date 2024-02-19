import {StyleSheet, Text, View} from 'react-native';
import {CommentType} from '../types/Comments';

type props = {
  listComments: CommentType[];
};

export default function Comments({listComments}: Readonly<props>) {
  let contentView = null;

  if (listComments) {
    contentView = listComments.map((item, index) => {
      return (
        <View style={styles.commentContainer} key={index}>
          <Text style={styles.nickname}>{item.nickname}</Text>
          <Text style={styles.comment}>{item.comment}</Text>
        </View>
      );
    });
  }

  return <View style={styles.container}>{contentView}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  commentContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  nickname: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#444',
  },
  comment: {
    color: '#555',
  },
});
