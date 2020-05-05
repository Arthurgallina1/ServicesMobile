import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import styled from "styled-components/native";

export default styled(LinearGradient).attrs({
    colors: ["#04c237", "#027d23"],
})`
    flex: 1;
    /* background: #04c237; */
`;
