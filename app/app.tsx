import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";

import { Colors } from "./constants/Colors";
import { DrawerStackParamList, RootStackParamList } from "./navigation/types";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import MealsOverviewScreen from "./screens/MealsOveriewScreen";
import store from "./store/redux/store";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerStackParamList>();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary800 },
        headerTintColor: "white",
        drawerContentStyle: { backgroundColor: Colors.primary800 },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: Colors.primary800,
        drawerActiveBackgroundColor: Colors.accent,
        // sceneContainerStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{
          title: "Favourites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#351401" />
      {/* <SafeAreaView style={styles.sav}> */}
      {/* <FavouriteContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: Colors.primary800 },
              headerTintColor: "white",
              contentStyle: { backgroundColor: Colors.primary600 },
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
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{
                title: "About the meal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavouriteContextProvider> */}
      {/* </SafeAreaView> */}
    </>
  );
}

const styles = StyleSheet.create({});
