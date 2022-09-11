import {
  StyleSheet,
  Dimensions,
  Pressable,
  TouchableOpacity,
  Image,
  Text,
  View,
} from "react-native";
import React from "react";
import COLORS from "../Screens/const/Color";
const { width } = Dimensions.get("screen");
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const Card = ({ Furniture, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailsScreen", Furniture)}
    >
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <AntDesign
            name="heart"
            size={18}
            color={Furniture.like ? COLORS.red : COLORS.primary}
          />
        </View>
        <Image source={Furniture.image} style={styles.image} />
        <Text style={styles.cardName}>{Furniture.name}</Text>
        <View style={styles.furnitureWrapper}>
          <Text style={styles.price}>{Furniture.price}</Text>
          <View style={{ flexDirection: "row", marginRight: 10 }}>
            <MaterialIcons name="star" color={COLORS.yellow} size={18} />
            <Text style={styles.rating}>4.3</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    height: 195,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width / 2.5,
    marginRight: 20,
    marginVertical: 20,
    padding: 10,
    borderRadius: 10,
  },
  iconContainer: {
    width: 25,
    height: 25,
    backgroundColor: COLORS.white,
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  image: {
    width: "100%",
    height: 120,
  },
  cardName: {
    marginTop: 10,
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: "bold",
  },
  furnitureWrapper: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 12,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  rating: {
    fontSize: 12,
    fontWeight: "bold",
    color: COLORS.primary,
    marginLeft: 10,
    
  },
});
