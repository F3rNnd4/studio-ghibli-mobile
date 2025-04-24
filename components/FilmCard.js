import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

// Pegamos a largura da tela para ajustar a altura da imagem de forma proporcional
const screenWidth = Dimensions.get("window").width;

export default function FilmCard({ film }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: film.image }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1f1f1f",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 20,

    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  image: {
    width: "100%",
    height: screenWidth * 0.6,
    resizeMode: "cover",
  },
  info: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#ccc",
    marginTop: 4,
    fontStyle: "italic",
  },
  text: {
    fontSize: 14,
    color: "#e0e0e0",
    marginTop: 6,
    textAlign: "justify",
  },
  subtitleSmall: {
    fontSize: 14,
    color: "#bbbbbb",
    marginTop: 2,
    fontStyle: "italic",
  },
});
