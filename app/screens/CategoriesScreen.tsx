import { FlatList, StyleSheet } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy_data";

const renderList = (itemData: { id: string; title: string; color: string }) => {
  return <CategoryGridTile title={itemData.title} color={itemData.color} />;
};

const CategoriesScreen = () => {
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
