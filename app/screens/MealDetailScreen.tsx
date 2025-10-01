import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useContext, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import IconButton from "../components/IconButton";
import MealDetails from "../components/MealDetails";
import List from "../components/MealDetailsComponent/List";
import Subtitle from "../components/MealDetailsComponent/Subtitle";
import { MEALS } from "../data/dummy_data";
import { RootStackParamList } from "../navigation/types";
import { FavouriteContext } from "../store/context/FavouriteContext";

type MealStackProps = NativeStackScreenProps<RootStackParamList, "MealDetail">;

const MealDetailScreen = (props: MealStackProps) => {
  const favouriteMealContext = useContext(FavouriteContext);

  const mealId = props.route.params?.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealsIsFavourite = favouriteMealContext.ids.includes(mealId);

  useLayoutEffect(() => {
    const changeFavouriteStatusHandler = () => {
      if (mealsIsFavourite) {
        favouriteMealContext.removeFavourites(mealId);
      } else {
        favouriteMealContext.addFavourites(mealId);
      }
    };

    props.navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealsIsFavourite ? "star" : "star-outline"}
          color="white"
          onPress={changeFavouriteStatusHandler}
        />
      ),
    });
  }, [props, favouriteMealContext, mealId, mealsIsFavourite]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedMeal!.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal!.duration}
        complexity={selectedMeal!.complexity}
        affordability={selectedMeal!.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List items={selectedMeal!.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List items={selectedMeal!.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
