import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type PostProps = {
  friend: boolean;
  image: string;
  title: string;
  description: string;
};

const Post = ({ friend, image, title, description }: PostProps) => {
  return (
    <View
      style={[
        styles.layout,
        friend ? styles.friendBackground : styles.defaultBackground,
        styles.shadow,
      ]}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 16,
    overflow: "hidden",
    flex: 1,
  },
  friendBackground: {
    backgroundColor: "lightgray",
  },
  defaultBackground: {
    backgroundColor: "white",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    resizeMode: "cover",
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: 6,
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "gray",
  },
  description: {
    lineHeight: 20,
    fontSize: 14,
    color: "gray",
  },
});

export default Post;
