import { takeLatest, call, put, all } from "redux-saga/effects";
import { Alert } from "react-native";
import api from "../../../services/api";
// import { toast } from "react-toastify";
import { signInSucess, signFailure } from "./actions";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, "/sessions", {
      email,
      password,
    });

    const { token, user } = response.data;

    if (user.provider) {
      Alert.alert(
        "Erro no login",
        "Usuário não pode ser prestador de serviços"
      );
      // toast.error("User is not a provider");
      return;
    }

    api.defaults.headers["Authorization"] = `Bearer ${token}`;
    yield put(signInSucess(token, user));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert("Erro no login", "Verifique suas credencias");
    // toast.error("Login failed, please verify your credentials.");
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { username, email, password } = payload;
    yield call(api.post, "/users", {
      name: username,
      email,
      password,
      provider: true,
    });

    // history.push('/');
  } catch (err) {
    Alert.alert("Erro no Cadastro", "Houve um erro no login");
    // toast.error("Register failed." + err);
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
]);
