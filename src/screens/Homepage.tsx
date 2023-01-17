import React, { useState } from 'react'
import UserList from '../components/UserList'
import Form from '../components/Form'
import '../styles/output.css'
import { useStoreActions } from "easy-peasy";
import { useStoreState } from "easy-peasy";
import { IState } from '../models/Models';



export interface Iuser {
    name: string;
    age: number;
    gender: string;
    id?: number;
}

interface IActions {
    AddUser: (user: Iuser) => void;
    DeleteUser: (userId: number) => void;
    UpdateUser: (user: Iuser) => void;
}



const Homepage: React.FC = () => {

    const [user, setUser] = useState<Iuser>({
        name: '',
        age: 0,
        gender: '',
    });

    const { AddUser, DeleteUser, UpdateUser } = useStoreActions((actions: IActions) => actions);
    const userList = useStoreState((state: IState) => state.userList)
    console.log(userList)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (user.name === '' || user.age === 0 || user.gender === '') {
            alert("Please fill the details");
        }
        else if (user.id) {
            UpdateUser(user);
            setUser({
                name: '',
                age: 0,
                gender: '',
            })
        }
        else {
            AddUser({ ...user, id: Date.now() });
            setUser({
                name: '',
                age: 0,
                gender: '',
            })
        };
    };


    const handleDelete = (userId: number) => {
        DeleteUser(userId);
    }

    const handleEdit = (id: number) => {
        let updateValue = userList.find((CurrElem: Iuser) => {
            return CurrElem.id === id;
        })
        console.log(updateValue)
        if (updateValue) setUser(updateValue);
    }


    const cardArgs = {
        handleEdit,
        handleDelete
    };

    const formArgs = {
        user,
        handleSubmit,
        setUser
    };


    return (
        <div className='bg-pink-50  border-2  h-full '>
            <div className=' text-center grid grid-cols-2 w-2/3  justify - between ml-10   mt-8'>
                < UserList {...cardArgs} />
                <Form {...formArgs} />
            </div >
        </div >

    )
}

export default Homepage
