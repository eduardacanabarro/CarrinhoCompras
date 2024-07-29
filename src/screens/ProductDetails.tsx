import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from "react-native";
import React from "react";
import { ProductDTO } from "../types/Product";

const ProductDetails = ({ product, visible, onClose }: { product: ProductDTO | null, visible: boolean, onClose: () => void }) => {
  if (!product) return null;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image source={{ uri: product.image }} style={styles.modalImage} />
          <Text style={styles.modalTitle}>{product.title}</Text>
          <Text style={styles.modalDescription}>{product.description}</Text>
          <Text style={styles.modalPrice}>${product.price}</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  modalTitle: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalDescription: {
    marginTop: 8,
    fontSize: 16,
  },
  modalPrice: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888',
  },
  closeButton: {
    marginTop: 16,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 8,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProductDetails;
