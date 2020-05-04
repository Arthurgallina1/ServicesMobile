import React, { useState, useMemo } from "react";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import { DatePickerAndroid } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Container, DateText, DateButton } from "./styles";

export default function DateTimeInput({ date, onChange }) {
  async function handleOpenPicker() {
    const { action, year, month, day } = await DatePickerAndroid.open({
      mode: "spinner",
      date,
    });

    const [open, setOpen] = useState(false);
    if (action === DatePickerAndroid.dateSetAction) {
      const selectedDate = new Date(year, month, day);

      onChange(selectedDate);
    }
  }

  const dateFormatted = useMemo(() => {
    format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt });
  }, [date]);
  return (
    <Container>
      <DateButton onPress={handleOpenPicker}>
        <Icon name="event" color="#FFF" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>
    </Container>
  );
}
