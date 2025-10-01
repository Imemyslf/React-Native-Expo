import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import MealList from "../components/MealList/MealList";
import { Colors } from "../constants/Colors";
import { MEALS } from "../data/dummy_data";
import { FavouriteContext } from "../store/context/FavouriteContext";

const FavouriteScreen = () => {
  const favouriteMealCtx = useContext(FavouriteContext);

  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealCtx.ids.includes(meal.id)
  );
  return (
    <View style={styles.container}>
      <MealList meals={favouriteMeals} />
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary600,
  },
});
