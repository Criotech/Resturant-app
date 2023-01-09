import React, {FC} from 'react';
import {StyleSheet, Image} from 'react-native';
import {View} from '../../components/Themed';
import ProductItem from '../../components/ProductItem.tsx';

interface Iprops {}

const Products: FC<Iprops> = ({}) => {
  return (
    <View style={styles.container}>
      {[1, 2, 3].map((item, i) => {
        return <ProductItem key={i} />;
      })}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {},
});
