import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from '../../assets/imgs/icon.png';
import Gravatar from '@krosben/react-native-gravatar';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

type props = {
  email: string;
  name: string;
};

function Header({email, name}: props) {
  const gravatar = email ? (
    <Gravatar email={email} style={styles.avatar} />
  ) : null;

  const navigation = useNavigation().navigate;

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={Icon} style={styles.image} />
        <Text style={styles.title}>Lambe Lambe</Text>
      </View>
      <TouchableOpacity
        style={styles.useConatiner}
        onPress={() => navigation(email ? 'Profile' : 'Auth')}>
        <Text style={styles.user}>{name ?? 'Entrar'}</Text>
        {gravatar}
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = ({user}: {user: any}) => {
  return {
    email: user.email,
    name: user.name,
  };
};

export default connect(mapStateToProps)(Header);

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
