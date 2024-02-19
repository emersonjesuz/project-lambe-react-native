import {faComment} from '@fortawesome/free-regular-svg-icons';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useState} from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback as TWF,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addComment} from '../store/actions/Post';
import UserTypes from '../types/user';

type props = {
  postID: number;
};

export default function AddComment({postID}: Readonly<props>) {
  const [showComment, setShowComment] = useState({
    comment: '',
    editMode: false,
  });

  const name = useSelector(({user}: {user: UserTypes}) => user.name);

  const dispatch = useDispatch();

  const handleAddComment = () => {
    const comment = {
      comment: showComment.comment,
      nickname: name!,
    };

    dispatch(addComment({comment, postID}));

    setShowComment({comment: '', editMode: false});
  };

  const tooggleView = (): React.JSX.Element => {
    if (showComment.editMode) {
      return (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            value={showComment.comment}
            autoFocus={true}
            onChangeText={comment => {
              setShowComment({...showComment, comment: `${comment}`});
            }}
            onSubmitEditing={handleAddComment}
          />
          <TouchableOpacity
            onPress={() => {
              setShowComment({comment: '', editMode: false});
            }}>
            <FontAwesomeIcon icon={faXmark} size={25} color={'#555'} />
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <TWF
          onPress={() => {
            setShowComment({comment: '', editMode: true});
          }}>
          <View style={styles.container}>
            <FontAwesomeIcon icon={faComment} size={25} color={'#555'} />
            <Text style={styles.caption}>Adicione um comentário...</Text>
          </View>
        </TWF>
      );
    }
  };

  return <View style={{flex: 1}}>{tooggleView()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
  },
  input: {
    width: '90%',
    borderBottomColor: '#DDCEFE',
    borderBottomWidth: 1,
  },
  caption: {
    marginLeft: 10,
    fontSize: 12,
    color: '#ccc',
  },
});
