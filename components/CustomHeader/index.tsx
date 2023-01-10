import React, {FC} from 'react';
import {StyleSheet, Image} from 'react-native';
import {Text, View} from '../Themed';
import SearchOutline from '../Svgs/search-outline';
import BellFill from '../Svgs/bell-fill';
import GPSOutline from '../Svgs/gps-fill';

interface IProps {
  navigation: any;
}

const CustomHeader: FC<IProps> = ({navigation}) => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      <SearchOutline height={20} width={20} color="#404040" />
    </View>
    <View style={styles.center}>
      <Text
        lightColor="#867979"
        darkColor="#fff"
        style={{fontSize: 11, marginBottom: 3}}
      >
        Current location
      </Text>
      <View style={{flexDirection: 'row'}}>
        <GPSOutline height={15} width={12} color={'#2D4F4D'} />
        <Text
          lightColor="#000000"
          darkColor="#fff"
          style={{fontSize: 16, fontWeight: '500', marginLeft: 10}}
        >
          Not yet set
        </Text>
      </View>
    </View>
    <View style={styles.iconContainer}>
      <BellFill height={24} width={20} color={'#404040'} />
    </View>
  </View>
);

export default CustomHeader;

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconContainer: {
    borderColor: '#4D4D4D',
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 0.2,
  },
});
