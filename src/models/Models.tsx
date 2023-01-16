
import { action } from "easy-peasy";



export default {

    userList: [],




    // ACTIONS

    addUser: action((state: any, user) => {
        // console.log(user)
        state.userList.push(user);
    }),

    deleteUser: action((state: any, user) => {
        state.userList = user
    }),


    updateUser: action((state: any, user) => {

        let updatedValue = state.userList.map((elem: any) => {
            if (elem.id === user.id) {
                elem = user;
            }
            return elem
        })
        state.userList = updatedValue
    }),


}

