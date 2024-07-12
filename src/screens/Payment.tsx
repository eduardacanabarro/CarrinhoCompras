import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
import React, { useState } from "react";

const Payment = () => {
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [validade, setValidade] = useState("");
  const [cvv, setCvv] = useState("");

  const finalizarPedido = () => {
    Alert.alert("Pedido Finalizado", "Suas informações foram salvas com sucesso!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Informações de Entrega</Text>
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />
      <TextInput
        style={styles.input}
        placeholder="Cidade"
        value={cidade}
        onChangeText={setCidade}
      />
      <TextInput
        style={styles.input}
        placeholder="Estado"
        value={estado}
        onChangeText={setEstado}
      />

      <Text style={styles.header}>Informações de Pagamento</Text>
      <TextInput
        style={styles.input}
        placeholder="Número do Cartão"
        value={numeroCartao}
        onChangeText={setNumeroCartao}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Validade"
        value={validade}
        onChangeText={setValidade}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
        secureTextEntry={true}
        keyboardType="numeric"
      />

      <Button title="Finalizar Pedido" onPress={finalizarPedido} />
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
