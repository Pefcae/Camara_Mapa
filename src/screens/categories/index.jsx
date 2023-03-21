import React from 'react';
import {  FlatList, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';//se agrega esto  clase 12

import { styles } from './styles';
import { CategoryItem } from '../../components';
import { selectCategory } from '../../store/actions';
//import {categories} from se saca esto y se reemplaza por el de arriba que dice store  clase 12

const Categories = ({ navigation }) => {
  const dispatch = useDispatch();//se agrega esto  clase 12
  const categories = useSelector((state) => state.category.categories);//se agrega esto  clase 12
  const onSelected = (item) => {
    dispatch(selectCategory(item.id));  //se agrega esto  clase 12
    navigation.navigate('Products', {
      title: item.title,
    });
  };
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList}
        contentContainerStyle={styles.contentContainerList}
      />
    </SafeAreaView>
  );
};

export default Categories;
