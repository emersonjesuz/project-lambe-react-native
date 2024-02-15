import Gravatar from '@krosben/react-native-gravatar';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type props = {
  navigation: any;
};

export default function Profile({navigation}: Readonly<props>) {
  const options = {email: 'josiemerson2013@gmail.com', secure: true};

  const onLogout = () => {
    navigation.navigate('Auth');
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Gravatar size={200} email={options.email} />
      </View>
      <Text style={styles.nickname}>Fulano de tall</Text>
      <Text style={styles.email}>josiemerson2014@gmail.com</Text>
      <TouchableOpacity onPress={onLogout} style={styles.buttom}>
        <Text style={styles.buttomText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 100,
    alignItems: 'center',
  },
  nickname: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },
  email: {
    marginTop: 20,
    fontSize: 25,
  },
  buttom: {
    alignItems: 'center',
    marginTop: 30,
    padding: 10,
    width: 100,
    backgroundColor: '#4286f4',
  },
  buttomText: {
    fontSize: 20,
    color: '#fff',
  },
});
