import React from "react";
import { View, Text } from "react-native";

import Background from "../../components/Background";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Profile() {
  return (
    <Background>
      <Text></Text>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: "Meu Perfil",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
