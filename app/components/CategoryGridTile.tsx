import { Pressable, StyleSheet, Text, View } from "react-native";

interface CategoryGridTileType {
  title: string;
  color: string;
}

const CategoryGridTile = ({ title, color }: CategoryGridTileType) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        // android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressedButton : styles.unpressedText,
        ]}
      >
        <View style={styles.innerContainer}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    // backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  pressedButton: {
    backgroundColor: "darkblue",
    opacity: 0.8,
  },
  unpressedText: {
    color: "white",
    fontSize: 16,
  },
});
