import React, { useMemo, useState } from "react";
import pt from "date-fns/locale/pt";
import { TouchableOpacity } from "react-native";
import { formatRelative, parseISO } from "date-fns";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Container, Avatar, Name, Time, SubmitButton } from "./styles";
import Modal from "../../../components/Modal";
import Background from "../../../components/Background";

export default function Confirm({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const provider = navigation.getParam("provider");
    const time = navigation.getParam("time");

    // const dateFormatted = useMemo(() =>
    //     formatRelative(parseISO(time), new Date(), { locale: pt })
    // );

    function handleApp() {
        //API call
        setModalVisible(true);

        setTimeout(() => {
            setModalVisible(false);
            navigation.navigate("Dashboard");
        }, 3000);
        // navigation.navigate("Dashboard");
    }
    return (
        <Background>
            <Container>
                <Modal modalVisible={modalVisible} Change={setModalVisible} />
                <Avatar
                    source={{
                        uri: `https://api.adorable.io/avatars/50/${provider.name}.png`,
                    }}
                />
                <Name>Arthur</Name>
                <Time>{time}</Time>

                <SubmitButton onPress={handleApp}>
                    Confirmar agendamento
                </SubmitButton>
            </Container>
        </Background>
    );
}

Confirm.navigationOptions = ({ navigation }) => ({
    title: "Confirmar agendamento",
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
