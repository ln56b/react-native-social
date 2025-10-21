import React from "react";
import { ScrollView, Text, View } from "react-native";
import { User, Post as PostType, Featured } from "../data/data";
import data from "../data/data";
import Card from "./Card";
import Post from "./Post";

const HomeScreen = () => {
  return (
    <ScrollView>
      <Text>Stories</Text>
      <ScrollView horizontal>
        {data.users.map((user) => (
          <View key={user.id}>
            <Card avatar={user.avatar} name={user.name} />
          </View>
        ))}
      </ScrollView>
      <Text>Featured</Text>
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

      <Text>My Feed</Text>
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

export default HomeScreen;
