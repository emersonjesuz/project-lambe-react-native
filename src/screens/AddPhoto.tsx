import {useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  PermissionsAndroid,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {addPost} from '../store/actions/Post';
import UserTypes from '../types/user';

type props = {
  navigation: any;
};

export default function AddPhoto({navigation}: Readonly<props>) {
  const [image, setImage] = useState<any>({});
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();
  const email = useSelector(({user}: {user: UserTypes}) => user.email);
  const name = useSelector(({user}: {user: UserTypes}) => user.name);

  const pickerImage = async (typePhoto: 'now' | 'gallery') => {
    const permissionToPhoto = await generatorPermission();

    if (!permissionToPhoto) return;

    let picker: any;

    if (typePhoto === 'now') {
      picker = await launchCamera({
        includeBase64: true,
        saveToPhotos: true,
        mediaType: 'photo',
        quality: 0.5,
        maxHeight: 600,
        maxWidth: 800,
        presentationStyle: 'popover',
        includeExtra: true,
      });
    } else {
      picker = await launchImageLibrary({
        includeBase64: true,
        mediaType: 'photo',
        quality: 0.5,
        maxHeight: 600,
        maxWidth: 800,
        presentationStyle: 'popover',
        includeExtra: true,
      });
    }

    if (picker.errorCode) {
      return Alert.alert('erro code');
    }

    if (!picker.didCancel) {
      const asset = picker.assets?.length ? picker.assets[0] : {};
      if (asset.uri && asset.base64) {
        setImage({uri: asset.uri, base64: asset.base64});
        return;
      }
    }
  };

  const generatorPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        Alert.alert('', 'Permissão negada!');
        return false;
      }
    } catch (error) {
      Alert.alert(
        'Erro em conceder permissão. ',
        'Ouve um erro ao tentar conceder permição a camera do dispositivo!',
      );
      return false;
    }
  };

  const save = () => {
    const newPost = {
      id: Math.random(),
      email,
      nickname: name!,
      image,
      comments: comment ? [{nickname: name!, comment}] : [],
    };

    dispatch(addPost(newPost));

    setComment('');
    setImage('');

    navigation.navigate('Feed');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Compartilhe uma imagem</Text>
        <View style={styles.imageContainer}>
          {Object.keys(image).length ? (
            <Image source={image} style={styles.image} />
          ) : null}
        </View>
        <View style={{flexDirection: 'row', gap: 10}}>
          <TouchableOpacity
            onPress={() => pickerImage('gallery')}
            style={styles.buttom}>
            <Text style={styles.buttomText}>Galeria</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => pickerImage('now')}
            style={styles.buttom}>
            <Text style={styles.buttomText}>Camera</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          onChangeText={setComment}
          style={styles.input}
          value={comment}
          placeholder="Adicionar comentario ?"
          placeholderTextColor={'#999'}
        />
        <TouchableOpacity onPress={save} style={styles.buttom}>
          <Text style={styles.buttomText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: Platform.OS === 'ios' ? 30 : 10,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '90%',
    height: Dimensions.get('window').width / 2,
    backgroundColor: '#eee',
    marginTop: 10,
  },
  image: {
    height: Dimensions.get('window').width / 2,
    width: '100%',
    resizeMode: 'center',
  },
  buttom: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4',
  },
  buttomText: {
    fontSize: 20,
    color: '#fff',
  },
  input: {
    marginTop: 20,
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});
