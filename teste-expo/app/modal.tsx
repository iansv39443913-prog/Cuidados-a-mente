import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function ModalScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Cuidados-a-Mente
      </Text>

      <Text style={styles.text}>
        Modal
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',

    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#321044',

    marginBottom: 10,
  },

  text: {
    fontSize: 16,
    color: '#555555',
  },

});