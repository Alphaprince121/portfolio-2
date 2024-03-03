import React from 'react'
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";



const Header = ({ darkMode, setDarkMode }) => {
    return (
        <header className='bg-gray-900 dark:bg-white text-white dark:text-gray-900'>
            <nav className='flex justify-between items-center p-5'>
                <h1 className='text-4xl'>PRINCE</h1>

                <div onClick={() => setDarkMode(!darkMode)}>
                    {
                        darkMode ?(
                            <IoSunny className='text-2xl cursor-pointer' />
                        ):(
                            <FaMoon className='text-2xl cursor-pointer' />

                    )}


                </div>
            </nav>
        </header>
    )
}

export default Header
