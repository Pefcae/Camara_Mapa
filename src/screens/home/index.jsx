import { View, Text, Image } from 'react-native';

import { styles } from './styles';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Avellaneda Recicla</Text>
      <Text style={styles.subtitulo}>¿Cuáles son los beneficios de separar los residuos?</Text>
      <Text style={styles.parrafo}>
        Cada habitante de Avellaneda genera 1 kg de residuos al día aproximadamente. Así sumamos en
        total 350 toneladas diarias. Si no separamos los reciclables de los residuos, son enviados
        al relleno sanitario, realizando un recorrido lineal. Si los separamos, los reciclables
        llegan a nuestra planta de clasificación EcoPunto, realizando un recorrido
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

export default Home;
