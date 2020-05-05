import React, { useState, useMemo } from "react";
import { format, formatISO } from "date-fns";
import pt from "date-fns/locale/pt";
import { DatePickerAndroid } from "react-native";
import { Text } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import DateTimePicker from "@react-native-community/datetimepicker";
import Datep from "../Date";

import { Container, DateText, DateButton } from "./styles";

export default function DateTimeInput({ Change }) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState("date");
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === "ios");
        setDate(currentDate);
        Change(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode("date");
    };

    const datafor = format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt });

    return (
        <Container>
            <DateButton onPress={showDatepicker}>
                {show && (
                    <DateTimePicker
                        testID='dateTimePicker'
                        timeZoneOffsetInMinutes={0}
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display='default'
                        onChange={onChange}
                    />
                )}
                <Icon name='event' color='#FFF' size={20} />
                <DateText>{datafor}</DateText>
            </DateButton>
        </Container>
    );
}
