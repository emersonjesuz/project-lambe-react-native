import Gravatar from '@krosben/react-native-gravatar';
import {StyleSheet, Text, View} from 'react-native';

type props = {
  email: string;
  nickname: string;
};

export default function Author({email, nickname}: props) {
  return (
    <View style={styles.container}>
      <Gravatar email={email} style={styles.avatar} />
      <Text style={styles.nickname}>{nickname}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  nickname: {
    color: '#444',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
