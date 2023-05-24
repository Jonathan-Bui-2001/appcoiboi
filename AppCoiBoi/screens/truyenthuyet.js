import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TruyenThuyetScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to TRUYEN THUYET Screen</Text>
      <Text style={styles.subtitle}>This is the starting point of your app</Text>
      <Text style={styles.content}>Lorem ipsunsequat libero sem et ligula. Donec sit amet iaculis velit. Ut a leo id nisi consequat hendrerit at at nunc.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default TruyenThuyetScreen;