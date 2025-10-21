import React from "react";
import { Text, View } from "react-native";
import Avatar from "./Avatar";

type CardProps = {
  avatar: string;
  name: string;
};
const Card = ({ avatar, name }: CardProps) => {
  return (
    <View>
      <Avatar url={avatar} />
      <Text>{name}</Text>
    </View>
  );
};

export default Card;
