import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  TouchableWithoutFeedback as TWF,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {faComment} from '@fortawesome/free-regular-svg-icons';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export default function AddComment() {
  const [showComment, setShowComment] = useState({
    comment: '',
    editMode: false,
  });

  const handleAddComment = () => {
    Alert.alert('Adicionado', showComment.comment);
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
