import { RootState } from "@/redux/store";
import { IUser } from "@/types";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface InitiateState {
  users: IUser[];
}
const initialState: InitiateState = {
  users: [{ id: "sefsf", name: "Mir" },{ id: "sdfa", name: "Mezba" }],
};

type DraftUser = Pick<IUser, "name">;

const createUser = (userData: DraftUser): IUser => {
  return { id: nanoid(), ...userData };
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    removeUser: (state, actions: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== actions.payload);
    },
  },
});

export const selectUsers = (state: RootState) => state.user.users;
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
