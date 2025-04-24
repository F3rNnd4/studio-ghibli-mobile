import { View, StyleSheet, Dimensions } from "react-native";

import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

const screenWidth = Dimensions.get("window").width;

export default function SkeletonCard() {
  return (
     <MotiView 
     from={{ opacity: 0.3 }} 
     animate={{ opacity: 1 }}
     transition={{
        loop: true,
        type: "timing",
        duration: 1000,
        delay: 300,
        easing: Easing.inOut(Easing.ease),
      }}
      style={styles.card}>
        <View style={styles.image} />
        <View style={styles.textBlock} />
        <View style={[styles.textBlock, { width: "80%" }]} />
  </MotiView>
  );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#081f5c",
        borderRadius: 16,
        marginBottom: 8,
        padding: 16,

        shadowColor: "#334eac",
        shadowOpacity: 0.4,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        elevation: 4,
    },
    image: {
        width: "100%",
        height: screenWidth * 0.5,
        borderRadius: 16,
        backgroundColor: "#7096d1",
    },
    textBlock: {
        height: 20,
        backgroundColor: "#e7f1ff",
        borderRadius: 8,
        marginTop: 12,
        width: "80%",
    },
});