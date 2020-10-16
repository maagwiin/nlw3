import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OrphanageDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Oi Magnu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F36'
  },

  text: {
    color: '#FFF',
    fontSize: 26,
    fontFamily: 'Nunito_700Bold'
  }
});