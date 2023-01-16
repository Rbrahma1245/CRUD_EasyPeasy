import React from 'react'
import { Form } from 'react-router-dom'
import Display from '../../components/UserList'

const HomePage = () => {





    return (
        <div className='bg-pink-50  border-2  h-full '>

            <div className=' text-center grid grid-cols-2 w-2/3  justify - between ml-10   mt-8'>
                < Display />
                <Form />
            </div >
        </div >
    )
}

export default HomePage
