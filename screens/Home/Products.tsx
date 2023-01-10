import React, {FC} from 'react';
import {StyleSheet, Image, SafeAreaView, FlatList} from 'react-native';
import {View} from '../../components/Themed';
import ProductItem from '../../components/ProductItem.tsx';

interface Product {
  name: string;
  price: string;
  rating: string;
  id: string;
}

const Products: FC<{products: Product[]}> = ({products}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem product={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {},
});
