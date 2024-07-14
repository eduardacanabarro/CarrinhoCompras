import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useUserContext } from "../contexts/UserContext";

const UserDetails = () => {
  const { userData, handleLogout } = useUserContext();

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: userData?.user.avatar,
        }}
      />
      <Text style={styles.name}>
        {userData?.user.fname ?? ""} {userData?.user.lname ?? ""}
      </Text>
      <Text style={styles.email}>{userData?.user.email ?? ""}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
  button: {
    borderWidth: 2,
    borderColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "blue",
    fontSize: 16,
    fontWeight: "bold",
  },
});
