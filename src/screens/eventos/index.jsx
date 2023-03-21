import { View, Text, Image } from 'react-native';

import { styles } from './styles';

const Eventos = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>¿Necesitás ayuda?</Text>
      <Text style={styles.subtitulo}>Consultá lo que necesites</Text>
      <Text style={styles.parrafo}>
        Si tenes alguna duda con respecto a tu compostera, cargá acá la imagenm escribinos la duda y te contactaremos
      </Text>
      <View style={styles.content}>
        <Image
          source={{
            uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/8c87ec37322201.573c6138b3e75.gif',
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default Eventos;
