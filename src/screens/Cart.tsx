import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useCartContext } from "../contexts/CartContext";
import { ICartItem } from "../types/Product";
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const { getCart, cart, removeProduct } = useCartContext();
  const navigation = useNavigation<any>();

  useEffect(() => {
    getCart();
  }, []);

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("O carrinho está vazio. Adicione produtos antes de fazer o pedido.");
    } else {
      console.log("Pedido realizado com sucesso! Parabéns.");
      navigation.navigate('Payment');
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total: number, item: ICartItem) => total + item.product.price, 0).toFixed(2);
  };

  const renderProduct = ({ item }: { item: ICartItem }) => (
    <View style={styles.productContainer}>
      <View style={styles.productInfo}>
        <Image source={{ uri: item.product.image }} style={styles.productImage} />
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.product.title}</Text>
        <Text style={styles.productPrice}>${item.product.price}</Text>
        <TouchableOpacity style={styles.button} onPress={() => removeProduct(item.product.id)}>
          <Text style={styles.buttonText}>Excluir do Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <Text style={styles.emptyCartText}>Seu carrinho está vazio. Adicione produtos para fazer um pedido.</Text>
      ) : (
        <FlatList
          data={cart}
          renderItem={renderProduct}
          keyExtractor={(item) => item.product.id.toString()}
          ListFooterComponent={() => (
            <View style={styles.footer}>
              <Text style={styles.totalText}>Total: ${getTotalPrice()}</Text>
              <TouchableOpacity style={styles.orderButton} onPress={placeOrder}>
                <Text style={styles.orderButtonText}>Fazer Pedido</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  productContainer: {
    padding: 10,
    marginVertical: 8,
    flexDirection: 'row',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productDetails: {
    flex: 2,
    paddingLeft: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: 'blue',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#58CFDB',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderButton: {
    backgroundColor: '#58CFDB',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  orderButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});
