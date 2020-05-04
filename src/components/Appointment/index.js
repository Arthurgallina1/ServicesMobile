import React, { useMemo } from "react";
import { parseISO, formatRelative } from "date-fns";
import pt from "date-fns/locale/pt";
import { View, Text } from "react-native";
import { Container, Left, Avatar, Info, Name, Time } from "./styles";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Appointment({ data, onCancel }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.time), new Date(), {
      locale: pt,
      addSufix: true,
    });
  }, [data.time]);
  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: `https://api.adorable.io/avatars/50/${data.name}.png`,
          }}
        />
        <Info>
          <Name>{data.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>
      {data.cancelable && !data.cancel && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
}
