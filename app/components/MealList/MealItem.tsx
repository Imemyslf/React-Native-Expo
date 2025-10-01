import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { RootStackParamList } from "../../navigation/types";
import MealDetails from "../MealDetails";

interface MealsType {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  affordability: string;
  complexity: string;
}

interface MealItemProps {
  meals: MealsType;
}

type MealScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  "MealOverview"
>;

const MealItem = ({ meals }: MealItemProps) => {
  const navigation = useNavigation<MealScreenProps>();

  const navigationHandler = () => {
    navigation.navigate("MealDetail", {
      mealId: meals.id,
    });
  };

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
        onPress={navigationHandler}
      >
        <View>
          <View>
            <Image source={{ uri: meals.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{meals.title}</Text>
          </View>
          <MealDetails
            duration={meals.duration}
            affordability={meals.affordability}
            complexity={meals.complexity}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;
const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },

  buttonPressed: {
    opacity: 0.5,
  },
});
