import React, { FC } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { View } from "../../components/Themed";
import ProductItem from '../../components/ProductItem.tsx';

interface Product {
    name: string;
    price: string;
    rating: number;
    id: string;
    url: string;
}

const Products:FC<{ products: Product[] }> = ({ products }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => (<ProductItem product={item} />)}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default Products;

const styles = StyleSheet.create({
    container: {

    },
})