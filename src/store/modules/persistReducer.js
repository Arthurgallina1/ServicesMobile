import { persistReducer } from "redux-persist";
// import AsyncStorage from "@react-native-community/async-storage";
import { AsyncStorage } from "react-native";

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "root",
      storage: AsyncStorage,
      whitelist: ["auth", "user"],
    },
    reducers
  );

  return persistedReducer;
};
