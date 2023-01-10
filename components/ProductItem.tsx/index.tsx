import React, { FC } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { View, Text } from "../Themed";
import Dougnout from "../../assets/images/dougnout.png";

interface Product {
    name: string;
    price: string;
    rating: number;
    id: string;
    url: string;
}

const ProductItem: FC<{ product: Product }> = ({ product }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={Dougnout} />
            </View>
            <View style={styles.content}>
                <Text style={styles.contentText1}>Special doughnuts for primates </Text>
                <Text style={styles.contentText2}>#5,000</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                    <View style={styles.ratingContainer} lightColor="#F7F7F7">
                        <Text>4.5/5</Text>
                    </View>

                    <TouchableOpacity style={styles.addBtn}>
                        <Text lightColor="#fff" darkColor="#fff" style={styles.addBtnText}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ProductItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        minHeight: 80,
        height: 100,
        justifyContent: 'center',
        borderBottomColor: "#F7F7F7",
        borderBottomWidth: 1
    },
    imageContainer: {
        height: 72,
        width: 72,
        borderRadius: 4,
        marginRight: 12
    },
    content: {
        justifyContent: 'space-between',
        height: 75,
        padding: 2,
        flex: 1
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
        borderRadius: 10
    },
    addBtn: {
        width: 92,
        height: 32,
        borderRadius: 4,
        backgroundColor: "#2D4F4D",
        justifyContent: 'center',
        alignItems: 'center'
    },
    addBtnText: {
        fontWeight: "700",
        fontSize: 12
    }
})