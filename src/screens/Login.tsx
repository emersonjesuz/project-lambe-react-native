import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {login} from '../store/actions/Users';
import UserTypes from '../types/user';

type props = {
  navigation: any;
  onLogin: (user: UserTypes) => {};
};

function Login({navigation, onLogin}: Readonly<props>) {
  const [form, setForm] = useState({
    name: 'temporario',
    email: '',
    password: '',
  });
  const effectLogin = () => {
    onLogin({...form});
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        style={styles.input}
        autoFocus={true}
        keyboardType="email-address"
        value={form.email}
        onChangeText={email => setForm({...form, email})}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        style={styles.input}
        value={form.password}
        onChangeText={password => setForm({...form, password})}
      />
      <TouchableOpacity onPress={effectLogin} style={styles.buttom}>
        <Text style={styles.buttomText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Register');
        }}
        style={styles.buttom}>
        <Text style={styles.buttomText}>Criar nova conta...</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLogin: (user: UserTypes) => dispatch(login(user)),
  };
};

export default connect(null, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 20,
    width: '90%',
    backgroundColor: '#eee',
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
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
});
