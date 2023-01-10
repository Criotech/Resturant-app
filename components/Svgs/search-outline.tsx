import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default function SearchOutline({
  height,
  width,
  color,
}: {
  height: number;
  width: number;
  color: string;
}) {
  return (
    <View style={styles.container}>
      <Svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M13.97 15.031C12.491 16.269 10.586 17.016 8.509 17.016C3.812 17.016 0 13.204 0 8.508C0 3.812 3.812 0 8.509 0C13.204 0 17.017 3.812 17.017 8.508C17.017 10.586 16.27 12.492 15.032 13.969L19.781 18.719C19.927 18.865 20 19.057 20 19.25C20 19.837 19.463 20 19.25 20C19.058 20 18.866 19.927 18.719 19.78L13.97 15.031ZM8.509 1.501C4.641 1.501 1.502 4.641 1.502 8.508C1.502 12.375 4.641 15.515 8.509 15.515C12.375 15.515 15.516 12.375 15.516 8.508C15.516 4.641 12.375 1.501 8.509 1.501Z"
          fill={color}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
