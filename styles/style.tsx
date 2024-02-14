import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    display: "flex",
    gap: 50,
    padding: 20,
  },

  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#272727",
    gap: 20,
    width: "100%",
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default styles;
