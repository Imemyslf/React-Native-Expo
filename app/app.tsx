import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { DrawerStackParamList, RootStackParamList } from "./navigation/types";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import MealsOverviewScreen from "./screens/MealsOveriewScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerStackParamList>();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Favourites" component={FavouriteScreen} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#351401" />
      {/* <SafeAreaView style={styles.sav}> */}
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigation}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catdId = route.params.categoryId;
            //   return {
            //     title: catdId,
            //   };
            // }}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </SafeAreaView> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24180f",
  },
});
