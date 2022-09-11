import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  View,
} from "react-native";
import React from "react";
import COLORS from "../Screens/const/Color";
const { width } = Dimensions.get("screen");
import { AntDesign } from "@expo/vector-icons";

const PopularItemCard = ({ Furniture }) => {
  return (
    <View style={styles.popularItemCard}>
      <Image source={Furniture.image} style={styles.img} />
      <View style={{ paddingVertical: 15, justifyContent: "center" }}>
        <Text style={styles.cardName}>{Furniture.name}</Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text>{Furniture.price}</Text>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 10,
            }}
          >
            <AntDesign name="heart" color={COLORS.yellow} size={18} />
            <Text style={styles.rating}>4.3</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PopularItemCard;

const styles = StyleSheet.create({
  popularItemCard: {
    height: 150,
    width: width - 100,
    backgroundColor: COLORS.white,
    elevation: 10,
    marginVertical: 20,
    marginRight: 20,
    flexDirection: "row",
    padding: 10,
  },
  img: {
    width: 100,
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginRight: 10,
  },
  rating: {
    fontSize: 12,
    fontWeight: "bold",
    color: COLORS.primary,
    marginLeft: 10,
  },
});
