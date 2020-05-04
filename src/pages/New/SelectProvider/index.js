import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import Background from "../../../components/Background";
import { Container, ProviderList, Avatar, Name, Provider } from "./styles";

const data = [
  { id: 1, name: "Provider 1" },
  { id: 2, name: "Provider 2" },
];

export default function SelectProvider({ navigation }) {
  const [providers, setProviders] = useState(data);

  return (
    <Background>
      <Container>
        <ProviderList
          data={data}
          keyExtractor={(provider) => String(provider.id)}
          renderItem={(provider) => (
            <Provider
              onPress={() => navigation.navigate("SelectDate", { provider })}
            >
              <Avatar
                source={{
                  uri: `https://api.adorable.io/avatars/50/${provider.name}.png`,
                }}
              />
              <Name>Arthur Provider</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
}

SelectProvider.navigationOptions = ({ navigation }) => ({
  title: "Selecione o prestador",
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Dashboard");
      }}
    >
      <Icon name="chevron-left" size={28} color={"#FFF"} />
    </TouchableOpacity>
  ),
});
