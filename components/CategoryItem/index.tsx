import React, { FC } from 'react';
import { StyleSheet, Image } from 'react-native';
import { View, Text } from "../Themed";
import Coffee from "../../assets/images/coffee.png";

interface Iprops {
    name: string;
    url: string
}

const CategoryItem:FC<Iprops> = ({ name, url }) => {
    return (
        <View lightColor='#F7F7F7' darkColor='#F7F7F7' style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={Coffee} />
            </View>
            <Text style={styles.text}>Coffee</Text> 
        </View>
    )
}

export default CategoryItem;

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 80,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8
    },
    imageContainer: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    text: {
        fontSize: 12,
        fontWeight: "700",
        marginTop: 12
    }
})