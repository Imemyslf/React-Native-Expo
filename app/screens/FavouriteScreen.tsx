// import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { useSelector } from "react-redux";
import MealList from "../components/MealList/MealList";
import { Colors } from "../constants/Colors";
import { MEALS } from "../data/dummy_data";
import { RootState } from "../store/redux/store";
// import { FavouriteContext } from "../store/context/FavouriteContext";

const FavouriteScreen = () => {
  const favouriteMealIds = useSelector(
    (state: RootState) => state.favouriteMeal.ids
  );
  // const favouriteMealCtx = useContext(FavouriteContext);

  const favouriteMeals = MEALS.filter((meal) =>
    // favouriteMealCtx.ids.includes(meal.id)
    favouriteMealIds.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.itemsNull}>
        <Text style={styles.text}>You have no favourite meals yet.</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <MealList meals={favouriteMeals} />
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  itemsNull: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary600,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary600,
  },
});
