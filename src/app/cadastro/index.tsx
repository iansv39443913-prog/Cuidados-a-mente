import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CadastroScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Cadastro</Text>

      <Text style={styles.text}>Aqui ficará a página de cadastro.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#321044',
    marginBottom: 15
  },

  text: {
    fontSize: 16,
    color: '#555555'
  },
});
