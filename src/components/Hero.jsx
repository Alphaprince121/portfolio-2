import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin, FaArrowDown } from 'react-icons/fa'
import avatar from '../assest/avatar.png'

const Hero = () => {

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

    window.addEventListener('scroll', function () {
        const downArrow = document.querySelector(".down-arrow");

        if (this.scrollY >= 2) downArrow.classList.add("hide-down-arrow");
        else downArrow.classList.remove("hide-down-arrow");
    })
    return (
        <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
            <h2 className='text-4xl text-rose-600  uppercase font-bold'>Prince Thakur</h2>
            <h3 className='py-3 text-2xl'>Software Engineer</h3>
            <p className='max-w-xl font-light'>
                Hello <span className='animate-pulse text-4xl'>👋</span>
                welcome to my site. I am a freelance Software engineer. I love to work on Web development, Mobile development & automation projects.
            </p>

            <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
            {media.map(({ id, link, icon }) =>(
                <a href={link} key={id}
                target='_blank'
                rel='noopener noreferrer'
                className='cursor-pointer duration-300 hover:text-rose-600'>
                    {icon}
                </a>
            ))}
            </div>
            <div>
                <img src={avatar} alt="avatar" className='w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-rose-600 rounded-xl pt-5'/>
                <a href="/resume.pdf" download={true}  className='flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 rounded-lg'>Resume</a>
            </div>

            <div className='mt-10 down-arrow'>
                <FaArrowDown className='text-gray-400 text-2xl animate-bounce'/>
            </div>

            
        </section>
    )
}

export default Hero
