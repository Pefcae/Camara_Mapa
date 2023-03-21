import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { THEME } from '../../constants/theme';

const EcoPointItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.date}>{item.barrio}</Text>
      </View>
      <View style={styles.content}>
          <Text style={styles.total}>{item.direccion}</Text>
        </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.total}>{item.nombre}</Text>
        </View>
      </View>
    </View>
  );
};

export default EcoPointItem;

