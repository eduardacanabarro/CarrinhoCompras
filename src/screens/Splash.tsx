import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/splash.png')} style={styles.image} />
      <Text style={styles.appName}>Nome do App</Text>
      <View style={styles.footer}>
        <Text style={styles.creators}>Criadores do App:</Text>
        <Text style={styles.creatorName}>Nome do Criador 1</Text>
        <Text style={styles.creatorName}>Nome do Criador 2</Text>
        <Text style={styles.creatorName}>Nome do Criador 3</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
  },
  creators: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  creatorName: {
    fontSize: 14,
  },
});
