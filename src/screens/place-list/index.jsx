import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { PlaceItem } from "../../components";
import { styles } from "./styles";

const PlaceList = ({ navigation }) => {
  const places = useSelector((state) => state.place.places);

  const renderItem = ({ item }) => (
    <PlaceItem
      {...item}
      onSelect={() => navigation.navigate("PlaceDetail", { placeId: item.id })}
    />
  );
  const keyExtractor = (item) => item.id;
  return (
    <View style={styles.container}>
      
      <Text style={styles.parrafo}>
       Saca una foto de tu planta o Compostera que tengas dudas y te contactaremos
      </Text>
    <FlatList
      data={places}
      style={styles.container}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
    </View>
  );
};

export default PlaceList;
