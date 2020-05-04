import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import Background from "../../../components/Background";
import DateTimeInput from "../../../components/DateTimeInput";
import { Container } from "./styles";

export default function SelectDate() {
  const [date, setDate] = useState(new Date());

  return (
    <Background>
      <Container>
        <DateTimeInput date={date} onChange={setDate} />
      </Container>
    </Background>
  );
}

SelectDate.navigationOptions = ({ navigation }) => ({
  title: "Selecione o horário",
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={28} color={"#FFF"} />
    </TouchableOpacity>
  ),
});
