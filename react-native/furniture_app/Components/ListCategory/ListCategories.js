import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React, { useState } from "react";
import COLORS from "../Screens/const/Color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const ListCategories = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const CategoryItems = [
    { name: "Chair", iconName: "seat-outline" },
    { name: "Table", iconName: "table-furniture" },
    { name: "Cupboard", iconName: "cupboard-outline" },
    { name: "Bed", iconName: "bed-queen-outline" },
  ];
  return (
    <View style={styles.ListCategoriesContainer}>
      {CategoryItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.4}
          onPress={() => setSelectedCategoryIndex(index)}
        >
          <View
            style={[
              styles.CategoryItemBtn,
              {
                backgroundColor:
                  selectedCategoryIndex == index
                    ? COLORS.primary
                    : COLORS.light,
              },
            ]}
          >
            <MaterialCommunityIcons
              name={item.iconName}
              size={20}
              color={
                selectedCategoryIndex == index ? COLORS.white : COLORS.primary
              }
            />
            <Text
              style={[
                styles.categoryText,
                {
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.white
                      : COLORS.primary,
                },
              ]}
            >
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ListCategories;

const styles = StyleSheet.create({
  ListCategoriesContainer: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  CategoryItemBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.light,
    borderRadius: 7,
    padding: 10,
  },
  categoryText: {
    fontSize: 13,
    color: COLORS.primary,
    fontWeight: "bold",
    marginLeft: 5,
  },
});
