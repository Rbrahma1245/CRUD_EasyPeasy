import { action } from "easy-peasy";
import { User } from "../screens/Homepage";

export interface State {
  userList: User[];
}

export default {
  userList: [],

  // ACTIONS

  addUser: action<State, User>((state, user) => {
    state.userList.push(user);
  }),

  deleteUser: action<State, number>((state, userId) => {
    state.userList = state.userList.filter(
      (userItem: User) => userItem.id !== userId
    );
  }),

  updateUser: action<State, User>((state, user) => {
    const updatedValue = state.userList.map((userList: User) => {
      if (userList.id === user.id) {
        userList = user;
      }
      return userList;
    });
    state.userList = updatedValue;
  }),
};
