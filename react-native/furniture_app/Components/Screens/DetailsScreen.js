import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import COLORS from "./const/Color";

const DetailsScreen = ({ navigation, route }) => {
  const Furniture = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <View style={styles.headerBtn}>
          <MaterialIcons
            name="chevron-left"
            size={25}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Details</Text>
        <View style={styles.headerBtn}>
          <MaterialCommunityIcons name="dots-vertical" size={25} />
        </View>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <ImageBackground
          source={Furniture.image}
          style={styles.imageBackground}
        >
          <View style={styles.backgroundImageSubTitle}>
            <View style={styles.backgroundImageSubTitleDetails}>
              <MaterialIcons name="star" color={COLORS.yellow} size={18} />
              <Text
                style={{
                  fontSize: 10,
                  color: COLORS.white,
                  fontWeight: "bold",
                }}
              >
                4.5
              </Text>
            </View>
            <Text
              style={{ fontSize: 9, fontWeight: "bold", color: COLORS.white }}
            >
              250 Reviews
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.detailsControl}>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", color: COLORS.primary }}
          >
            {Furniture.name}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: COLORS.primary,
              marginVertical: 20,
            }}
          >
            Description
          </Text>
          <Text style={{ fontSize: 12, color: COLORS.dark, lineHeight: 20 }}>
            Design mdern chair with luxury curves in an organic yet constructed
            design that holds the sittings body and provides a feelings of
            relaxation while offering excellent back support.
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 30, fontWeight: "bold", color: COLORS.yellow }}
            >
              {Furniture.price}
            </Text>
            <View style={styles.quantityContainer}>
              <View style={styles.quantityBtn}>
                <Feather name="plus" size={20} />
              </View>
              <Text style={{ color: COLORS.white, fontWeight: "bold" }}>1</Text>
              <View style={styles.quantityBtn}>
                <Feather name="minus" size={20} />
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 50,
                height: 50,
                elevation: 7,
                marginRight: 30,
                backgroundColor: COLORS.white,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons name="heart-outline" size={28} />
            </View>
            <View style={styles.addToCartBtn}>
              <Text style={{ color: COLORS.white }}>Add To Cart</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerBtn: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    marginHorizontal: 20,
    height: 300,
    borderRadius: 15,
    overflow: "hidden",
  },
  backgroundImageSubTitle: {
    height: 60,
    width: 70,
    backgroundColor: COLORS.primary,
    position: "absolute",
    bottom: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
  },
  backgroundImageSubTitleDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  detailsControl: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 40,
  },
  quantityContainer: {
    height: 35,
    width: 100,
    padding: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quantityBtn: {
    width: 25,
    height: 25,
    backgroundColor: COLORS.primary,
    borderRadius: 7,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartBtn: {
    height: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
});
