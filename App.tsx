import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./components/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0d0d0",
    alignItems: "center",
    justifyContent: "center",
  },
});
