import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Svg, { Path } from "react-native-svg"

export default function HomeFill({ height, width, color }: { height: number, width: number, color: string }) {
    return (
        <View style={styles.container}>
            <Svg width={width} height={height} viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M20 6.093L17 3.093V1H20V6.093ZM24 12H21V22H3V12H0L12 0L24 12ZM14 14H10V20H14V14Z" fill={color} />
            </Svg>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
