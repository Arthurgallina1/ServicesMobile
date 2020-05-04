import React from "react";
import { ActivityIndicator } from "react-native"; //loading no botao

import { Container, Text } from "./styles";

export default function Button({ children, loading, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}
