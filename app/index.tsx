import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoriesScreen from "./screens/CategoriesScreen";
export default function Index() {
  return (
    <SafeAreaView>
      <CategoriesScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
