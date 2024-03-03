import React from 'react'
import Section from './common/Section'
import avatar from '../assest/avatar.png'

const Testimonials = () => {
    const Testimonials =[
        {
            id:1,
            image:avatar,
            naame:"Jhon Doe",
            comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque odio quis debitis qui laborum repudiandae a magnam tempore placeat.",
        },
        {
            id:2,
            image:avatar,
            naame:"Liza",
            comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque odio quis debitis qui laborum repudiandae a magnam tempore placeat.",
        },
        {
            id:3,
            image:avatar,
            naame:"Robert",
            comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque odio quis debitis qui laborum repudiandae a magnam tempore placeat.",
        },
    ]
    return (
        <Section title="Testimonials ✉️" subtitle='This is what my other clients have to say about me. I accept clients from all around the world.'>

        <div className='max-w-xl flex flex-col gap-2'>
            {Testimonials.map(({id, image, naame, comment }) =>(
                <div className='flex p-4 justify-center items-center rounded-xl shadow-md  shadow-white dark:shadow-black'>
                    <div className='w-1/3'>
                        <img src={image} alt={naame} className='w-20 h-20 object-cover object-top pt-2' />
                    </div>
                    <div className='w-2/3 flex flex-col justify-center items-center gap-3 p-2'>
                        <h3 className='text-xl font-semibold'>{naame}</h3>
                        <p className='text-sm font-extralight'>{comment}</p>
                    </div>
                </div>
            ))}
        </div>
        </Section>
    )
}

export default Testimonials
