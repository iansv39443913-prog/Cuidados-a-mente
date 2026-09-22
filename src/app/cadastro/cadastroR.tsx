import { Stack, router } from 'expo-router';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function Cadastro() {
  return (
    <View style={styles.container}>

      <Stack.Screen options={{ title: 'Cadastro' }} />

      <Text style={styles.title}>Crie sua conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
      />

      <Pressable
        style={styles.button}
        onPress={() => router.replace('/confirmacao/verificacao?tipo=responsavel')}
      >
        <Text style={styles.buttonText}>
          Finalizar cadastro
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#AAAAAA',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  button: {
    height: 50,
    backgroundColor: '#9B59B6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
