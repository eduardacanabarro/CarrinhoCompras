import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import { ProductDTO } from "../types/Product"; 


const ProductDetails = () => {
  
  const renderProduct = ({ item }: { item: ProductDTO }) => (
    <View style={styles.productContainer}>
      <View style={styles.productInfo}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <Text style={styles.productCategory}>${item.category}</Text>
        <Text style={styles.producDescription}>${item.description}</Text>
        <Text style={styles.productRating}>{item.rating.count} - {item.rating.rate}</Text>
      </View>
    </View>
  );
  
  return (  
    <View>
      
      
      
      <Text>ProductDetails</Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  productContainer:{

  }, 
  productInfo: {
  
  },
  productImage:{

  },
  productTitle:{

  }, 
  productPrice:{

  },
  productDetails:{

  },
  productCategory:{

  },
  producDescription:{

  },
  productRating:{

  },     
 
});
