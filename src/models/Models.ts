import { action } from "easy-peasy";
import { Iuser } from "../screens/Homepage";

export interface IState {
    userList: Iuser[];
}


export default {
    userList: [],


    // ACTIONS

    AddUser: action<IState, Iuser>((state, user) => {
        state.userList.push(user);
    }),

    DeleteUser: action<IState, number>((state, userId) => {
        state.userList = state.userList.filter((userItem: Iuser) => userItem.id !== userId)

    }),

    UpdateUser: action<IState, Iuser>((state, user) => {
        let updatedValue = state.userList.map((userList: Iuser) => {
            if (userList.id === user.id) {
                userList = user;
            }
            return userList
        })
        state.userList = updatedValue
    }),
}

