import React, {FC} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {doughnuts} from '../../assets/images';
import {View, Text} from '../Themed';

interface Product {
  name: string;
  price: string;
  rating: string;
  id: string;
}

const ProductItem: FC<{product: Product}> = ({product}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={doughnuts} />
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText1}>{product.name}</Text>
        <Text style={styles.contentText2}>{product.price}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={styles.ratingContainer} lightColor="#f7f7f7">
            <Text style={{color: '#fff'}}>{product.rating}</Text>
          </View>
          <TouchableOpacity style={styles.addBtn}>
            <Text lightColor="#fff" darkColor="#fff" style={styles.addBtnText}>
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 80,
    height: 100,
    justifyContent: 'center',
    borderBottomColor: '#F7F7F7',
    borderBottomWidth: 1,
  },
  imageContainer: {
    height: 72,
    width: 72,
    borderRadius: 4,
    marginRight: 12,
  },
  content: {
    justifyContent: 'space-between',
    padding: 2,
    flex: 1,
  },
  contentText1: {
    fontWeight: '600',
    fontSize: 13,
  },
  contentText2: {
    fontWeight: '600',
    fontSize: 16,
  },
  ratingContainer: {
    width: 60,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  addBtn: {
    height: 32,
    borderRadius: 4,
    backgroundColor: '#2D4F4D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnText: {
    fontWeight: '700',
    fontSize: 12,
  },
});
