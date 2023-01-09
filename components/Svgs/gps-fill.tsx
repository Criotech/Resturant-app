import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from "react-native-svg"

export default function GPSOutline({ height, width, color }: { height: number, width: number, color: string }) {
    return (
        <View style={styles.container}>
            <Svg width={width} height={height} viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M6 7.5C6.4125 7.5 6.76575 7.353 7.05975 7.059C7.35325 6.7655 7.5 6.4125 7.5 6C7.5 5.5875 7.35325 5.23425 7.05975 4.94025C6.76575 4.64675 6.4125 4.5 6 4.5C5.5875 4.5 5.2345 4.64675 4.941 4.94025C4.647 5.23425 4.5 5.5875 4.5 6C4.5 6.4125 4.647 6.7655 4.941 7.059C5.2345 7.353 5.5875 7.5 6 7.5ZM6 15C3.9875 13.2875 2.4845 11.6967 1.491 10.2277C0.497 8.75925 0 7.4 0 6.15C0 4.275 0.60325 2.78125 1.80975 1.66875C3.01575 0.55625 4.4125 0 6 0C7.5875 0 8.98425 0.55625 10.1903 1.66875C11.3968 2.78125 12 4.275 12 6.15C12 7.4 11.5033 8.75925 10.5098 10.2277C9.51575 11.6967 8.0125 13.2875 6 15Z" fill={color} />
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