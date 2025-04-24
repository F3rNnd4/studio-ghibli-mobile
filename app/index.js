import { use, useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";

import axios from "axios";

import FilmCard from "../components/FilmCard.js";
import SkeletonCard from "../components/SkeletonCard.js";

export default function Home() {
  // Cria um estado chamado Films para guardar a lista de filmes
  const [films, setFilms] = useState([]);

  // Cria um estado chamado loading para saber se os filmes estão sendo carregados
  const [loading, setLoading] = useState(true);

  const url = "https://ghibliapi.vercel.app/films";

  //   useEffect(() => {
  //     setTimeout(() => {
  //       axios
  //         .get("https://ghibliapi.vercel.app/films")
  //         .then((res) => setFilms(res.data))
  //         .catch((err) => console.log(err))
  //         .finally(() => setLoading(false));
  //     }, 5000);
  //   }, []);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get(url);
        setFilms(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFilms();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>🎥 Filmes Studio Ghibli</Text>

      {loading ? (
        <FlatList
          data={[1, 2, 3, 4, 5]}
          keyExtractor={(item) => item.toString()}
          renderItem={() => <SkeletonCard />}
          contentContainerStyle={styles.list}
        />
      ) : (
        <FlatList
          data={films}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <FilmCard film={item} />}
          contentContainerStyle={styles.list}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191414",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginVertical: 16,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
});
