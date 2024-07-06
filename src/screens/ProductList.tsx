import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, Alert, StyleSheet } from "react-native";
import { useCartContext } from "../contexts/CartContext";
import { ProductDTO } from "../types/Product";


const ProductList = () => {
  const {addProduct } = useCartContext()
  const [products, setProducts] = useState<ProductDTO[]>([]);
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



  const renderProduct = ({ item }: { item: ProductDTO }) => (
    <View style={styles.productContainer}>
      <View style={styles.productInfo}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <TouchableOpacity style={styles.button} onPress={() => addProduct(item)}>
          <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
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
        />
      )}
      <Text>Cart</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  productContainer: {
    flexDirection: "row",
    marginBottom: 10,
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
    justifyContent: "center",
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 14,
    color: "#888",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  orderButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  orderButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  footer: {
    marginTop: 20,
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
});

export default ProductList;