import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  TouchableWithoutFeedback as TWF,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
            focusable={true}
            onChangeText={comment => {
              setShowComment({...showComment, comment: `${comment}`});
            }}
            onSubmitEditing={handleAddComment}
          />
          <TWF onPress={() => setShowComment({comment: '', editMode: false})}>
            {/* <Icon name="times" size={15} color={'#555'} /> */}
            <Text>X</Text>
          </TWF>
        </View>
      );
    } else {
      return (
        <TWF onPress={() => setShowComment({...showComment, editMode: true})}>
          <View style={styles.container}>
            <Icon name="comment-o" size={25} color={'#555'} />

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
  },
  caption: {
    marginLeft: 10,
    fontSize: 12,
    color: '#ccc',
  },
});
