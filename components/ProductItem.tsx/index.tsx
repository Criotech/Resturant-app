import React, {FC} from 'react';
import {StyleSheet, Image, SafeAreaView, FlatList} from 'react-native';
import {doughnuts} from '../../assets/images';
import {View, Text} from '../Themed';

interface Iprops {
  item: {
    name: string;
    price: string;
    rating: string;
    id: number;
  };
}

const DATA: Iprops['item'][] = [
  {
    name: 'Special doughnuts for primates',
    price: '#5,000',
    rating: '4.5/5',
    id: 1,
  },
  {
    name: 'Special doughnuts for primates',
    price: '#5,000',
    rating: '4.5/5',
    id: 2,
  },
  {
    name: 'Special doughnuts for primates',
    price: '#5,000',
    rating: '4.5/5',
    id: 3,
  },
  {
    name: 'Special doughnuts for primates',
    price: '#5,000',
    rating: '4.5/5',
    id: 4,
  },
  {
    name: 'Special doughnuts for primates',
    price: '#5,000',
    rating: '4.5/5',
    id: 5,
  },
];

const Item = ({item}: Iprops) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={doughnuts} />
    </View>
    <View style={styles.content}>
      <Text style={styles.contentText1}>{item.name}</Text>
      <Text style={styles.contentText2}>{item.price}</Text>
    </View>
    <View style={styles.ratingContainer}>
      <Text style={{color: '#fff'}}>{item.rating}</Text>
    </View>
  </View>
);

const ProductItem: FC<{}> = () => {
  const renderItem = ({item}: {item: Iprops['item']}) => <Item item={item} />;

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 80,
    height: 100,
    justifyContent: 'center',
    borderBottomColor: '#F7F7F7',
    borderBottomWidth: 1,
  },
  imageContainer: {
    height: 72,
    width: 72,
    borderRadius: 4,
    marginRight: 12,
  },
  content: {
    justifyContent: 'space-between',
    padding: 2,
    flex: 1,
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
    borderRadius: 10,
  },
  addBtn: {
    height: 32,
    borderRadius: 4,
    backgroundColor: '#2D4F4D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnText: {
    fontWeight: '700',
    fontSize: 12,
  },
});
