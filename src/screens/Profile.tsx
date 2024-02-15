import Gravatar from '@krosben/react-native-gravatar';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {logout} from '../store/actions/Users';
import {connect} from 'react-redux';
import UserTypes from '../types/user';

type props = {
  navigation: any;
  email: string;
  name?: string;
  onLogout: any;
};

function Profile({navigation, email, name, onLogout}: Readonly<props>) {
  const options = {email, secure: true};

  const handlerLogout = () => {
    onLogout();
    navigation.navigate('Auth');
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Gravatar size={200} email={options.email} />
      </View>
      <Text style={styles.nickname}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <TouchableOpacity onPress={handlerLogout} style={styles.buttom}>
        <Text style={styles.buttomText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = ({user}: {user: UserTypes}) => {
  return {
    email: user.email,
    name: user.name,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLogout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

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
