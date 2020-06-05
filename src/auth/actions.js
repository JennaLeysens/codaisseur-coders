import axios from "axios";
import { AUTH_URL } from "./config";

export function userLoggedIn(token, profile) {
  return { type: "SAVE_PROFILE", payload: { token, profile } };
}

export function login(email, password) {
  // Return the thunk itself, i.e. a function
  return async function thunk(dispatch, getState) {
    const response = await axios.post(`${AUTH_URL}/login`, {
      email: email,
      password: password,
    });
    console.log("response", response.data.jwt);
    const profileResponse = await axios.get(`${AUTH_URL}/me`, {
      headers: {
        Authorization: `Bearer ${response.data.jwt}`,
      },
    });
    console.log("profile", profileResponse);
    console.log(
      "TODO: make login request, get an access token",
      email,
      password
    );
    dispatch(userLoggedIn(token, profile));
  };
}
