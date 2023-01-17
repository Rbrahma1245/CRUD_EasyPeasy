import React from 'react'
import { useStoreState } from "easy-peasy";
import { Iuser } from '../screens/Homepage';
import { IState } from '../models/Models';


interface props {
    handleEdit: (id: number) => void
    handleDelete: (id: number) => void
}


const UserList: React.FC<props> = ({ handleDelete, handleEdit }) => {

    const userList = useStoreState((state: IState) => state.userList)

    return (
        <div >
            DISPLAY PAGE
            {
                userList.map((user: Iuser) => {
                    // console.log(currElem)
                    return (
                        <div className='  grid grid-cols-2 h-32 text-left  bg-pink-200 rounded  mt-2 ml-2' key={user.id}>
                            <div className=' py-2 px-4 mt-2'>
                                Name : {user.name}
                                <br />
                                Age : {user.age}
                                <br />
                                Gender : {user.gender}
                            </div>

                            <div className='  flex justify-end  text-center'>
                                <button className=" bg-sky-600 hover:bg-sky-700 py-2 px-4 h-12 rounded mt-5 mr-4"
                                    onClick={() => handleEdit(user.id!)}>  Edit  </button>
                                <button className=" bg-rose-400 hover:bg-rose-500 py-2 px-4 h-12  rounded  mt-5 mr-4"
                                    onClick={() => handleDelete(user.id!)} >   Delete  </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserList
