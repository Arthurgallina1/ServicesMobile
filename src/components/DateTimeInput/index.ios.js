import React, { useState, useMemo } from "react";
import { DatePickerIOS } from "react-native";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";

import Icon from "react-native-vector-icons/MaterialIcons";
import { Container, DateText, DateButton } from "./styles";

export default function DateTimeInput({ date, onChange }) {
  const [open, setOpen] = useState(false);

  const dateFormatted = useMemo(() => {
    format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt });
  }, [date]);
  return (
    <Container>
      <DateButton>
        <Icon name="event" color="#FFF" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {open && (
        <DatePickerIOS
          date={date}
          onDateChange={onChange}
          minimumDate={new Date()}
          minuteInterval={60}
          locale="pt"
          mode="date"
        />
      )}
    </Container>
  );
}
