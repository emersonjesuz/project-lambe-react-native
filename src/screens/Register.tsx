import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export default function Register() {
  const [form, setForm] = useState({name: '', email: '', password: ''});

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        style={styles.input}
        onChangeText={name => setForm({...form, name})}
        autoFocus={true}
        value={form.name}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={email => setForm({...form, email})}
        keyboardType="email-address"
        value={form.email}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        onChangeText={password => setForm({...form, password})}
        value={form.password}
        secureTextEntry={true}
      />

      <TouchableOpacity onPress={() => {}} style={styles.buttom}>
        <Text style={styles.buttomText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 20,
    width: '90%',
    height: 40,
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#333',
    paddingLeft: 15,
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
