import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";

import MealList from "../components/MealList/MealList";
import { CATEGORIES, MEALS } from "../data/dummy_data";
import { RootStackParamList } from "../navigation/types";

type MealsOveriewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MealOverview"
>;

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

  return <MealList meals={displayedMeals} />;
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({});
