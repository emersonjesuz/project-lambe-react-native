import {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  Platform,
  ScrollView,
  Alert,
  ImageProps,
  PermissionsAndroid,
} from 'react-native';

import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
export default function AddPhoto() {
  const [image, setImage] = useState<any>({});
  const [comment, setComment] = useState('');

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
    Alert.alert('salvado', '');
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
