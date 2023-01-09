import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from "react-native-svg"

export default function SearchOutline({ height, width, color }: { height: number, width: number, color: string }) {
    return (
        <View style={styles.container}>
            <Svg width={width} height={height} viewBox="0 0 18 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 2.99805C13.5 1.75605 14.508 0.748047 15.75 0.748047C16.992 0.748047 18 1.75605 18 2.99805C18 4.23905 16.992 5.24805 15.75 5.24805C14.508 5.24805 13.5 4.23905 13.5 2.99805ZM15 2.99805C15 2.58405 15.336 2.24805 15.75 2.24805C16.164 2.24805 16.5 2.58405 16.5 2.99805C16.5 3.41205 16.164 3.74805 15.75 3.74805C15.336 3.74805 15 3.41205 15 2.99805ZM6.75 2.99805C6.75 1.75605 7.758 0.748047 9 0.748047C10.242 0.748047 11.25 1.75605 11.25 2.99805C11.25 4.23905 10.242 5.24805 9 5.24805C7.758 5.24805 6.75 4.23905 6.75 2.99805ZM8.25 2.99805C8.25 2.58405 8.586 2.24805 9 2.24805C9.414 2.24805 9.75 2.58405 9.75 2.99805C9.75 3.41205 9.414 3.74805 9 3.74805C8.586 3.74805 8.25 3.41205 8.25 2.99805ZM0 2.99805C0 1.75605 1.008 0.748047 2.25 0.748047C3.492 0.748047 4.5 1.75605 4.5 2.99805C4.5 4.23905 3.492 5.24805 2.25 5.24805C1.008 5.24805 0 4.23905 0 2.99805ZM1.5 2.99805C1.5 2.58405 1.836 2.24805 2.25 2.24805C2.664 2.24805 3 2.58405 3 2.99805C3 3.41205 2.664 3.74805 2.25 3.74805C1.836 3.74805 1.5 3.41205 1.5 2.99805Z" fill={color} />
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
