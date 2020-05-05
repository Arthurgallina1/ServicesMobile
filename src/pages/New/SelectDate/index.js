import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import Background from "../../../components/Background";
import DateTimeInput from "../../../components/DateTimeInput";
import { Container, HourList, Title, Hour } from "./styles";

const data = [
    { time: "9:00", provider: "Arthur", available: false },
    { time: "10:00", provider: "Arthur", available: false },
    { time: "11:00", provider: "Arthur", available: false },
    { time: "12:00", provider: "Arthur", available: true },
    { time: "13:00", provider: "Arthur", available: true },
    { time: "14:00", provider: "Arthur", available: true },
    { time: "15:00", provider: "Arthur", available: true },
    { time: "16:00", provider: "Arthur", available: true },
];

export default function SelectDate({ navigation }) {
    const [date, setDate] = useState(new Date());
    const [availableDates, setAvailableDates] = useState(data);

    const provider = navigation.getParam("provider");

    function handleSelectHour(time) {
        navigation.navigate("Confirm", {
            provider,
            time,
        });
    }
    return (
        <Background>
            <Container>
                <DateTimeInput value={date} Change={setDate} />

                <HourList
                    data={availableDates}
                    keyExtractor={(item) => item.time}
                    renderItem={({ item }) => (
                        <Hour
                            enabled={item.available}
                            onPress={() => {
                                handleSelectHour(item.time);
                            }}
                        >
                            <Title>{item.time}</Title>
                        </Hour>
                    )}
                />
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
            <Icon name='chevron-left' size={28} color={"#FFF"} />
        </TouchableOpacity>
    ),
});
