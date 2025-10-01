import { Meals } from "@/app/models/types";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

interface MealsType {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  affordability: string;
  complexity: string;
}

interface MealListProps {
  meals: Meals[];
}

const MealList = ({ meals }: MealListProps) => {
  const renderMealItem = (item: Meals) => {
    const mealsData: MealsType = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
    };
    return <MealItem meals={mealsData} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealItem(itemData.item)}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
