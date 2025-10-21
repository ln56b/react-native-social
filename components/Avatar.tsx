import React from "react";
import { Image, StyleSheet } from "react-native";

type AvatarProps = {
  url: string;
};

const Avatar = ({ url }: AvatarProps) => {
  return <Image source={{ uri: url }} style={styles.avatar} />;
};

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Avatar;
