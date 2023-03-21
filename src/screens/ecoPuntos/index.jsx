import { View, Text, FlatList } from 'react-native';

import { styles } from './styles';
import EcoPointItem from '../../components/ecoPoint-item';
import { ECOPOINTS } from '../../constants/data/ecoPuntos';

const EcoPuntos = ({ navigation }) => {
  const renderItem = ({ item }) => <EcoPointItem item={item} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>EcoPuntos</Text>

      <Text style={styles.parrafo}>
        Un Ecopunto es planta de clasificación de residuos reciclables.
      </Text>
      <Text style={styles.parrafo}>
        Actualmente, se recuperan más de 100 toneladas por mes, lo que equivale a 4500 kilos
        diarios.{' '}
      </Text>
      <Text style={styles.parrafo}>
        Las Estaciones de Reciclado son también lugares de acopio de material reciclable que luego
        también es trasladado al ECO.
      </Text>
      <View>
        <FlatList
          key={ECOPOINTS.id}
          data={ECOPOINTS}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    </View>
  );
};

export default EcoPuntos;
