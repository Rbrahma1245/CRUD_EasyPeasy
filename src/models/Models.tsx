import { action } from "easy-peasy";
import { Iuser } from "../screens/Homepage";



export default {
    userList: [],



    // ACTIONS

    AddUser: action((state: any, user: Iuser) => {
        state.userList.push(user);
    }),

    DeleteUser: action((state: any, user: Iuser) => {
        state.userList = user
    }),

    UpdateUser: action((state: any, user: Iuser) => {
        let updatedValue = state.userList.map((userList: Iuser) => {
            if (userList.id === user.id) {
                userList = user;
            }
            return userList
        })
        state.userList = updatedValue
    }),


}

