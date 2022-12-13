import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type UserType = {
  _id: string;
  username: string;
  email: string;
};

interface AuthState {
  currentUser: UserType | null;
  token: string | null;
  redirectUrl: string | null;
}

const initialState: AuthState = {
  currentUser: null,
  token: null,
  redirectUrl: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleLoginUser(
      state,
      action: PayloadAction<{ user: UserType; token: string }>
    ) {
      state.currentUser = action.payload.user;
      state.token = action.payload.token;
    },
    handleLogoutUser(state) {
      state = initialState;
    },
    handleSetRedirectUrl(state, action: PayloadAction<string | null>) {
      state.redirectUrl = action.payload;
    },
  },
});

export const { handleLoginUser, handleLogoutUser, handleSetRedirectUrl } =
  authSlice.actions;
export default authSlice.reducer;
