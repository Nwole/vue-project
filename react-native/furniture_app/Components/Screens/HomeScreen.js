import React from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TextInput,
  FlatList,
  Text,
  View,
} from "react-native";
import COLORS from "../Screens/const/Color";
import Constants from "expo-constants";
import Furnitures from "./const/Furniture";
import PopularItemCard from "../Popular/PoularItemCard";
import Card from "../Card/Card";
import { MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";
import ListCategories from "../ListCategory/ListCategories";
const { width } = Dimensions.get("screen");
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="sort-variant"
          size={28}
          color={COLORS.primary}
        />
        <MaterialCommunityIcons
          name="cart-outline"
          size={28}
          color={COLORS.primary}
        />
      </View>
      <ScrollView showVerticalScrollIndicator={false}>
        <Text style={styles.headerTitle}>Best Furniture For Your Home</Text>
        <View style={styles.searchBarSection}>
          <View style={styles.searchInputContainer}>
            <EvilIcons name="search" size={28} color={COLORS.grey} />
            <TextInput placeholder="search" />
          </View>
          {/* <View style={styles.sortBtn}></View> */}
        </View>
        <Text style={styles.title}>Categories</Text>
        <ListCategories />
        <Text style={styles.title}>Top Furniture</Text>
        <FlatList
          contentContainerStyle={{ marginLeft: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Furnitures}
          renderItem={({ item }) => (
            <Card Furniture={item} navigation={navigation} />
          )}
        />
        <Text style={styles.title}>Popular</Text>
        <FlatList
          contentContainerStyle={{ marginLeft: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Furnitures}
          renderItem={({ item }) => <PopularItemCard Furniture={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 30,
    width: "55%",
    paddingHorizontal: 20,
  },
  searchBarSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddiing: 20,
  },
  searchInputContainer: {
    marginVertical: 10,
    height: 50,
    backgroundColor: COLORS.light,
    flex: 1,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
});
