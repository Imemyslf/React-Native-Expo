import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy_data";
import { Meals } from "../models/types";
import { RootStackParamList } from "../navigation/types";

type MealsOveriewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MealOverview"
>;

interface MealsType {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  affordability: string;
  complexity: string;
}

const MealsOverviewScreen = (props: MealsOveriewScreenProps) => {
  const catId = props.route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => {
      return category.id === catId;
    })?.title;

    props.navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, props]);

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
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealItem(itemData.item)}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
