import React from "react";
import { StatusBar } from "react-native";
import { PersistGate } from "react-redux";
import "./src/config/ReactotronConfing";
import { Provider } from "react-redux";

import { store, persistor } from "./src/store";
import Index from "./src/App";

export default function App() {
    return (
        <Provider store={store}>
            {/* <PersistGate persistor={persistor}> */}
            <StatusBar barStyle='light-content' backgroundColor='#04c237' />
            <Index />
            {/* </PersistGate> */}
        </Provider>
    );
}
