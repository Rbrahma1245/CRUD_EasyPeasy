import React from 'react'
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <div >
            <div className=' h-16 bg-slate-600 flex items-center text-white justify-between'>

                <div className=' ml-10  '>
                    <NavLink className='' to="/">  HOME</NavLink>
                    <NavLink className='ml-10' to="/about">  ABOUT</NavLink>
                    <NavLink className='ml-10' to="/contact">  CONTACT</NavLink>
                </div>

                <div className='mr-10  '>

                    <NavLink className='' to="/login">  LOGIN</NavLink>
                    <NavLink className='ml-10' to="/signup">  SIGNUP</NavLink>
                </div>

            </div>

        </div >
    )
}

export default Header
