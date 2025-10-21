import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Avatar from "./Avatar";

type CardProps = {
  avatar: string;
  name: string;
};
const Card = ({ avatar, name }: CardProps) => {
  return (
    <View style={[styles.card]}>
      <Avatar url={avatar} />
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Card;
