import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { Pressable, StyleSheet } from "react-native";

type IoniconsName = ComponentProps<typeof Ionicons>["name"];

interface IconButtonTypes {
  icon: IoniconsName;
  color: string;
  onPress: () => void;
}

const IconButton = ({ icon, color, onPress }: IconButtonTypes) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
