import React, { useRef } from "react";

import { Image } from "react-native";
import Background from "../../components/Background";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Logo from "../../assets/cart.png";
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from "./styles";
export default function SignIn({ navigation }) {
  const passwordRef = useRef();

  function handleSubmit() {}

  return (
    <Background>
      <Container>
        <Image source={Logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={() => {}}>Login</SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate("SignUp")}>
          <SignLinkText>Criar conta.</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
