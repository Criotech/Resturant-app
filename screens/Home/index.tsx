import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {face} from '../../assets/images';
import {Text, View} from '../../components/Themed';
import {RootTabScreenProps} from '../../types';
import Categories from './Categories';
import Products from './Products';

const categories = [
  {name: 'aal', url: 'jsjjs'},
  {name: 'aal', url: 'jsjjs'},
  {name: 'aal', url: 'jsjjs'},
  {name: 'aal', url: 'jsjjs'},
  {name: 'aal', url: 'jsjjs'},
  {name: 'aal', url: 'jsjjs'},
  {name: 'aal', url: 'jsjjs'},
  {name: 'aal', url: 'jsjjs'},
];

const products = [
  {
    name: 'Special doughnuts for primatesasss',
    price: '#5,000',
    rating: '4.5/5',
    id: '1',
  },
  {
    name: 'Special doughnuts for primatess',
    price: '#5,000',
    rating: '4.5/5',
    id: '2',
  },
  {
    name: 'Special doughnuts for primates',
    price: '#5,000',
    rating: '4.5/5',
    id: '3',
  },
  {
    name: 'Special doughnuts for primates',
    price: '#5,000',
    rating: '4.5/5',
    id: '4',
  },
  {
    name: 'Special doughnuts for primates',
    price: '#5,000',
    rating: '4.5/5',
    id: '5',
  },
  {
    name: 'Special doughnuts for primates',
    price: '#5,000',
    rating: '4.5/5',
    id: '6',
  },
  {
    name: 'Special doughnuts for primates',
    price: '#5,000',
    rating: '4.5/5',
    id: '7',
  },
  {
    name: 'Special doughnuts for primates',
    price: '#5,000',
    rating: '4.5/5',
    id: '8',
  },
  {
    name: 'Special doughnuts for primates',
    price: '#5,000',
    rating: '4.5/5',
    id: '9',
  },
  {
    name: 'Special doughnuts for primates',
    price: '#5,000',
    rating: '4.5/5',
    id: '10',
  },
  {
    name: 'Special doughnuts for primateshaha',
    price: '#5,000',
    rating: '4.5/5',
    id: '11',
  },
];

export default function Home({navigation}: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <View
        style={styles.topSectionContainer}
        lightColor="#4FAF5A"
        darkColor="#4FAF5A"
      >
        <View style={styles.topSectionContainerLeft}>
          <Text style={styles.topSectionContainerText} lightColor="#FFFFFF">
            Place your first order and get a free delivery!
          </Text>

          <TouchableOpacity style={styles.topSectionContainerButton}>
            <Text style={styles.topSectionContainerButtonText}>Order now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.topSectionContainerRight}>
          <Image source={face} />
        </View>
      </View>

      <View style={{marginTop: 24}}>
        <Categories categories={categories} />
      </View>

      <View style={{marginTop: 24}}>
        <Text style={styles.all}>All</Text>

        <Products products={products} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 16,
  },
  topSectionContainer: {
    width: '100%',
    borderRadius: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingTop: 18,
    flexDirection: 'row',
  },
  topSectionContainerLeft: {
    backgroundColor: 'transparent',
    width: '60%',
  },
  topSectionContainerRight: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topSectionContainerText: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 25,
    color: '#ffffff',
  },
  topSectionContainerButton: {
    width: 89,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#000000',
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topSectionContainerButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#ffffff',
  },
  all: {
    fontWeight: '700',
    fontSize: 18,
  },
});
