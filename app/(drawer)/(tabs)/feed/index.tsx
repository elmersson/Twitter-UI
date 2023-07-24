import { StyleSheet, View, FlatList, Pressable } from "react-native";

import Tweet from "../../../../components/Tweet";
import tweets from "../../../../assets/data/tweets";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useEffect, useState } from "react";

export default function FeedScreen() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      const url = "http://localhost:3000/tweet";
      const authToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjoxM30.rAixsNqKWh2bwhRuukO7rg2dBH8jb-x4-UpH6IuT9o4";
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      if (res.status !== 200) {
        console.log("Error fetching tweets");
      }
      const data = await res.json();
      console.log(data);
      setTweets(data);
    };

    fetchTweets();
  }, []);

  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
      <Link href="/new-tweet" asChild>
        <Entypo
          name="plus"
          size={24}
          color="white"
          style={styles.floatingButton}
        />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  floatingButton: {
    backgroundColor: "#1C9BF0",
    padding: 15,
    borderRadius: 25,
    position: "absolute",
    right: 15,
    bottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: "hidden",
  },
});
