import React, { useState } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Background from "../../components/Background";
import { Container, Title, List } from "./styles";
import Appointment from "../../components/Appointment";
import Reactotron from "reactotron-react-native";

const data = [
  {
    id: 1,
    name: "Arthur Gallina",
    time: "2020-05-01T11:30:30",
    past: true,
    cancelable: false,
    cancel: false,
  },
  {
    id: 2,
    name: "Arthur Perfil ",
    time: "2020-05-05T15:30:30",
    past: false,
    cancelable: true,
    cancel: false,
  },
  {
    id: 3,
    name: "Arthur Teste",
    time: "2020-05-08T19:14:30",
    past: false,
    cancelable: true,
    cancel: false,
  },
  {
    id: 4,
    name: "Arthur 4",
    time: "2020-05-08T19:14:30",
    past: false,
    cancelable: true,
    cancel: false,
  },
];

export default function Dashboard() {
  const [dados, setDados] = useState(data);
  Reactotron.display({
    name: "cudc",
    preview: "Who's there?",
    value: dados,
  });

  function handleCancel(id) {
    const newDados = dados.filter((item) => item.id !== id);

    setDados(newDados);
  }
  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={dados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appointment onCancel={() => handleCancel(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: "Agendamentos",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
