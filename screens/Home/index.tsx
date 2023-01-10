import { StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import Face from "../../assets/images/face.png";
import Categories from './Categories';
import Products from './Products';

const categories = [
  {name: "aal", url: "jsjjs"},
  {name: "aal", url: "jsjjs"},
  {name: "aal", url: "jsjjs"},
  {name: "aal", url: "jsjjs"},
  {name: "aal", url: "jsjjs"},
  {name: "aal", url: "jsjjs"},
  {name: "aal", url: "jsjjs"},
  {name: "aal", url: "jsjjs"},
]

const products = [
  {
      name: "jsjks",
      price: "string",
      rating: 3,
      id: "string",
      url: "string",
  },
  {
    name: "jsjks",
    price: "string",
    rating: 3,
    id: "aa",
    url: "string",
},{
  name: "jsjks",
  price: "string",
  rating: 3,
  id: "dd",
  url: "string",
},{
  name: "jsjks",
  price: "string",
  rating: 3,
  id: "qq",
  url: "string",
},{
  name: "jsjks",
  price: "string",
  rating: 3,
  id: "ccb",
  url: "string",
},{
  name: "jsjks",
  price: "string",
  rating: 3,
  id: "pop",
  url: "string",
},
{
  name: "jsjks",
  price: "string",
  rating: 3,
  id: "poap",
  url: "string",
},{
  name: "jsjks",
  price: "string",
  rating: 3,
  id: "poqp",
  url: "string",
},
]

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <View style={styles.topSectionContainer} lightColor="#4FAF5A" darkColor="#4FAF5A">
        <View style={styles.topSectionContainerLeft}>
          <Text style={styles.topSectionContainerText} lightColor="#FFFFFF">Place your first order and get a free delivery!</Text>

          <TouchableOpacity style={styles.topSectionContainerButton}>
            <Text style={styles.topSectionContainerButtonText}>Order now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.topSectionContainerRight}>
          <Image source={Face} />
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
    paddingVertical: 20,
    flex: 1
  },
  topSectionContainer: {
    height: 124,
    width: "100%",
    borderRadius: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingTop: 18,
    flexDirection: 'row'
  },
  topSectionContainerLeft: {
    backgroundColor: "transparent",
    width: "60%"
  },
  topSectionContainerRight: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  topSectionContainerText: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 25,
    color: "#ffffff"
  },
  topSectionContainerButton: {
    width: 89,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#000000",
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  topSectionContainerButtonText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#ffffff"
  },
  all: {
    fontWeight: "700",
    fontSize: 18, 
    marginBottom: 10
  }
});
