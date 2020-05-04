import { takeLatest, call, put, all } from "redux-saga/effects";
import api from "../../../services/api";
import { Alert } from "react-native";

import { updateProfileSuccess, updateProfileFailure } from "./actions";

export function* updateProfile({ payload }) {
  try {
    const { name, avatar_id, email, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email, avatar_id },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, "/users", profile);
    Alert.alert("Sucesso!", "Perifl atualizado com sucesso");
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert("Erro!", "Verifique seus dados");
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest("@user/UPDATE_PROFILE_REQUEST", updateProfile)]);
