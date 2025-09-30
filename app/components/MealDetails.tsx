import { StyleSheet, Text, View } from "react-native";

interface MealDetailsProps {
  duration: number;
  complexity: string;
  affordability: string;
  style?: object;
  textStyle?: object;
}

const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}: MealDetailsProps) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailsItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailsItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
