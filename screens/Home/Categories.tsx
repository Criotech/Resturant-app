import React, {FC} from 'react';
import {StyleSheet, Image} from 'react-native';
import {View} from '../../components/Themed';
import CategoryItem from '../../components/CategoryItem';

interface Iprops {
  categories: {name: string; url: string}[];
}

const Categories: FC<Iprops> = ({categories}) => {
  return (
    <View style={styles.container}>
      {categories.map((item, i) => {
        return <CategoryItem key={i} name={item.name} url={item.url} />;
      })}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
