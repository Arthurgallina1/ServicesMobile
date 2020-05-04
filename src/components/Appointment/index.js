import React from "react";
import { View, Text } from "react-native";
import { Container, Left, Avatar, Info, Name, Time } from "./styles";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Appointment() {
  return (
    <Container>
      <Left>
        <Avatar
          source={{ uri: "https://api.adorable.io/avatars/50/tuca.ping" }}
        />
        <Info>
          <Name>Arthur Gallina</Name>
          <Time>em 3 horas</Time>
        </Info>
      </Left>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
}
