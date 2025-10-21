import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import data from "../data/data";
import Card from "./Card";
import Post from "./Post";

const HomeScreen = () => {
  return (
    <ScrollView>
      <Text style={[styles.heading, { letterSpacing: 16 }]}>Stories</Text>
      <ScrollView horizontal>
        {data.users.map((user) => (
          <View key={user.id}>
            <Card avatar={user.avatar} name={user.name} />
          </View>
        ))}
      </ScrollView>
      <Text style={styles.heading}>Featured</Text>
      {data.featured.map((post) => (
        <View key={post.id}>
          <Post
            friend={post.friend}
            image={post.image}
            title={post.title}
            description={post.description}
          />
        </View>
      ))}

      <Text style={styles.heading}>My Feed</Text>
      {data.posts.map((post) => (
        <View key={post.id}>
          <Post
            friend={post.friend}
            image={post.image}
            title={post.title}
            description={post.description}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 16,
    textTransform: "uppercase",
    color: "gray",
  },
});

export default HomeScreen;
