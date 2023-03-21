import React, { useEffect } from 'react';// se agrega esto clase 12
import { SafeAreaView, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'; // se agrega esto clase 12

import { styles } from './styles';
import { ProductItem } from '../../components';
import { selectProduct, filterProducts } from '../../store/actions'; // se agrega esto clase 12


const Products = ({ navigation }) => {
  const dispatch = useDispatch();//se agrega esto clase 12
  const category = useSelector((state) => state.category.selected); //se agrega esto clase 12
  const filteredProducts = useSelector((state) => state.products.filteredProducts);//se agrega esto

  const onSelected = (item) => {
    dispatch(selectProduct(item.id));// se agrega esto clase 12
    navigation.navigate('ProductDetail', {
      title: item.title,
    });
  };

  const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();

  useEffect(() => {
    dispatch(filterProducts(category.id)); //se agrega esto clase 12
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.contentList}
      />
    </SafeAreaView>
  );
};

export default Products;
