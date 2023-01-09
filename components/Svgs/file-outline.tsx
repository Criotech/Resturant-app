import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from "react-native-svg"

export default function SearchOutline({ height, width, color }: { height: number, width: number, color: string }) {
    return (
        <View style={styles.container}>
            <Svg width={width} height={24} viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 24H0.5V0H14.5L20.5 6V24ZM13.5 1H1.5V23H19.5V7H13.5V1ZM16.5 16V17H4.5V16H16.5ZM16.5 13V14H4.5V13H16.5ZM16.5 10V11H4.5V10H16.5ZM14.5 6H19.086L14.5 1.414V6Z" fill={color} />
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
