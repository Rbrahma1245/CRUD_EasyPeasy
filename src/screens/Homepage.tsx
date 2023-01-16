import React, { useState } from 'react'
import Card from '../components/Display'
import Form from '../components/Form'
import '../styles/output.css'
import { useStoreActions } from "easy-peasy";
import { useStoreState } from "easy-peasy";

// import { useActions } from "easy-peasy";



export interface Iuser {
    name: string;
    age: number;
    gender: string;
    id?: number;
}


const Homepage: React.FC = () => {

    const [user, setUser] = useState<Iuser>({
        name: '',
        age: 0,
        gender: '',
    });



    const addUser = useStoreActions((actions: any) => actions.addUser);
    const deleteUser = useStoreActions((actions: any) => actions.deleteUser);
    const updateUser = useStoreActions((actions: any) => actions.updateUser);

    const userList = useStoreState((state: any) => state.userList)



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (user.name === '' || user.age === 0 || user.gender === '') {
            alert("Please fill the details");
        }
        else if (user.id) {
            updateUser(user);
            setUser({
                name: '',
                age: 0,
                gender: '',
            })
        }

        else {
            addUser({ ...user, id: Date.now() });
            setUser({
                name: '',
                age: 0,
                gender: '',
            }
            )
        };
    }


    const handleDelete = (id: number) => {
        let deletedUserList = userList.filter((CurrElem: any) => {
            return (CurrElem.id !== id)
        })
        deleteUser(deletedUserList)
    }


    const handleEdit = (id: number) => {

        let updateValue = userList.find((CurrElem: any) => {
            return CurrElem.id === id
        })
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
                < Card {...cardArgs}  />
                <Form {...formArgs} />
            </div >
        </div >

    )
}

export default Homepage
