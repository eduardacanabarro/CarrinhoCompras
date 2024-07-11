import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image, Alert, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useCartContext } from "../contexts/CartContext";
import { ICartItem } from "../types/Product";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}


const Cart = () => {
  const {getCart, cart, removeProduct} = useCartContext()
 
  const placeOrder = () => {
    Alert.alert("Pedido realizado com sucesso! Parabéns.");
    console.log("Pedido realizado com sucesso! Parabéns.");
    
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.product.price, 0).toFixed(2);
  };

  useEffect(() => {
    getCart()
  },[])
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
      
      <Text>Cart</Text>
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
});


/*

//Array, mas fazer tipo preço é igual a preço ....
let carrinho = [
    { id: 1, nome: 'Produto 1', preco: 100 },
    { id: 2, nome: 'Produto 2', preco: 200 },
    { id: 3, nome: 'Produto 3', preco: 300 }
];

//Funcao pra remover
function removerItemDoCarrinho(id) {
    const novoCarrinho = carrinho.filter(item => item.id !== id);
    
    //atualiza
    carrinho = novoCarrinho;
}


removerItemDoCarrinho(2); //removendo oque tem id 2

console.log(carrinho); // [{ id: 1, nome: 'Produto 1', preco: 100 }, { id: 3, nome: 'Produto 3', preco: 300 }]

*/