import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, StyleSheet } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy_data";
import { RootStackParamList } from "../navigation/types";

type CategoriesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MealCategories"
>;

const CategoriesScreen = (props: CategoriesScreenProps) => {
  const renderList = (itemData: {
    id: string;
    title: string;
    color: string;
  }) => {
    const pressHandler = () => {
      props.navigation.navigate("MealOverview", {
        categoryId: itemData.id,
      });
    };

    return (
      <CategoryGridTile
        title={itemData.title}
        color={itemData.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemData) => renderList(itemData.item)}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
const styles = StyleSheet.create({});
