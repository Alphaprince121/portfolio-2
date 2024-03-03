import React from 'react'
import Section from './common/Section'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import contact from '../assest/mobile.png'

const Contact = () => {


    const media = [
        {
            id: 1,
            link: 'https//twitter.com',
            icon: <FaTwitter />,
        },
        {
            id: 2,
            link: 'https//facebook.com',
            icon: <FaFacebook />,
        },
        {
            id: 3,
            link: 'https//linkedin.com',
            icon: <FaLinkedin />,
        },

    ];
    return (
        <Section title="Contact 📞" subtitle='These are the way you can get in touch with me. Hope tp hear from you soon :)'>

        <div className='flex flex-col items-center justify-center gap-8 text-center'>
            <div>
                <img src={contact} alt="contact info" className='w-32 h-32' />
            </div>
            <div>
                <p className='max-w-xs md:mx-w-lg font-extralight'>I am open to regardind freelancing or full-time opportunities. Fell free to contact me using your preferred medium.</p>
            </div>
            <div className='flex w-fill items-center justify-evenly text-3xl gap-8'>
                {media.map(({id, link, icon}) =>(
                    <a href={link} target='_blank' rel='noopener noreferrer' className='duration-200 ease-in-out hover:text-rose-600'>{icon}</a>
                ))}
            </div>

            <div className='p-8 text-left w-full'>
                <form action="https://getform.io/f/vbmKlEeY" method='POST'>
                    <div className='gap-4 w-full'>
                        <div className='flex flex-col'>
                            <label className='capitalize text-sm py-2 font-extralight'>name</label>
                            <input type="text" name='name' className='border-2 rounded-lg p-3 flex focus:outline-none border-gary-400 bg-gray-900 dark:bg-white text-white dark:text-black'  />
                        </div>
                        <div className='flex flex-col'>
                            <label className='capitalize text-sm py-2 font-extralight'>phone</label>
                            <input type="number" name='phone' className='border-2 rounded-lg p-3 flex focus:outline-none border-gary-400 bg-gray-900 dark:bg-white text-white dark:text-black'  />
                        </div>
                        <div className='flex flex-col'>
                            <label className='capitalize text-sm py-2 font-extralight'>email</label>
                            <input type="email" name='email' className='border-2 rounded-lg p-3 flex focus:outline-none border-gary-400 bg-gray-900 dark:bg-white text-white dark:text-black' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='capitalize text-sm py-2 font-extralight'>message</label>
                            <textarea name="message" rows="4" className='border-2 rounded-lg p-3 flex focus:outline-none border-gary-400 bg-gray-900 dark:bg-white text-white dark:text-black' ></textarea>
                        </div>
                    </div>
                    <div className='flex items-center justify-center '>
                        <button className='my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3  uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200'>send message</button>
                    </div>
                </form>
            </div>
        </div>
        </Section>
    )
}

export default Contact
