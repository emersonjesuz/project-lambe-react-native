import Gravatar from '@krosben/react-native-gravatar';
import {useNavigation} from '@react-navigation/native';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from '../../assets/imgs/icon.png';
import UserTypes from '../types/user';

export default function Header() {
  const email = useSelector(({user}: {user: UserTypes}) => user.email);
  const name = useSelector(({user}: {user: UserTypes}) => user.name);

  const gravatar = email ? (
    <Gravatar email={email} style={styles.avatar} />
  ) : null;
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={Icon} style={styles.image} />
        <Text style={styles.title}>Lambe Lambe</Text>
      </View>
      <TouchableOpacity
        style={styles.useConatiner}
        onPress={() => navigate('Main')}>
        <Text style={styles.user}>{name ?? 'Entrar'}</Text>
        {gravatar}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#BBB',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  title: {
    color: '#000',
    fontFamily: 'shelter',
    height: 30,
    fontSize: 28,
  },
  useConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 30,
    height: 30,
  },
  user: {
    fontSize: 12,
    color: '#888',
  },
});
