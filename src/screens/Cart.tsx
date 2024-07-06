import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image, Alert, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Cart = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
        setLoading(false);
      });
  }, []);

  const removeFromCart = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const placeOrder = () => {
    Alert.alert("Pedido realizado com sucesso! Parabéns.");
    console.log("Pedido realizado com sucesso! Parabéns.");
    
  };

  const getTotalPrice = () => {
    return products.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.productContainer}>
      <View style={styles.productInfo}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <TouchableOpacity style={styles.button} onPress={() => removeFromCart(item.id)}>
          <Text style={styles.buttonText}>Excluir do Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
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
