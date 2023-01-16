import React, { useState } from 'react'
import { Iuser } from '../screens/Homepage';




export interface userInput {
    name: string;
    age: string;
    gender: string;
    id?: number;
}



interface props {
    user: Iuser
    setUser: React.Dispatch<React.SetStateAction<Iuser>>
    handleSubmit: (e: React.FormEvent) => void
}



const Form: React.FC<props> = ({ user, setUser, handleSubmit }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }



    return (

        <div className='border-2 ml-10 text-center rounded bg-blue-100 h-80'>
            USER FORM

            <div className=' text-left grid  gap-2 mt-4 ml-8 mr-8 py-2 px-4'>
                <label>Enter Your Name</label>
                <input className='h-10 py-2 px-4' type="text" name='name' placeholder='Enter Your Name' value={user.name} onChange={handleChange} />

                <label>Enter Your Age</label>
                <input className='h-10 py-2 px-4' type="number" min='1' name='age' placeholder='Enter Your Age' value={user.age !== 0 ? user.age : ""} onChange={handleChange} />

                <div className='mt-4 '>
                    <input className='ml-2' type="radio" value="Male" name="gender" checked={user.gender === "Male"} onChange={handleChange} /> Male
                    <input className='ml-2' type="radio" value="Female" name="gender" checked={user.gender === "Female"} onChange={handleChange} /> Female
                    <input className='ml-2' type="radio" value="Other" name="gender" checked={user.gender === "Other"} onChange={handleChange} /> Other
                </div>

                {
                    user.id ? <button className=" bg-sky-600 hover:bg-sky-700 py-2 px-4 w-32 rounded mt-2 ml-2" onClick={handleSubmit} > Update </button> :
                        <button className="bg-green-400  active:hover-bg-yellow py-2 px-4 w-32 rounded mt-2 ml-2" onClick={handleSubmit} > SUBMIT </button>
                }

            </div>
        </div >
    )
}

export default Form
