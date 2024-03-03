import React from 'react'
import Section from './common/Section'
import commerce from '../assest/commerce.png'
import research from '../assest/research.png'
import web from '../assest/web (1).png'
import mobile from '../assest/mobile.png'
const Services = () => {

    const services = [
        {
            id: 1,
            image: commerce,
            title: "ECommerce Website",
        },
        {
            id: 2,
            image: web,
            title: "Web Development",
        },
        {
            id: 3,
            image: mobile,
            title: "Mobile Development",
        },
        {
            id: 4,
            image: research,
            title: "Research and Development",
        },
    ]

    return (
        <Section title='Services 🛠️' subtitle='Here are all the services that i provide to my clients. I I hope i offer the services that you are looking for. if you dont find something that you are looking for than plese send me an email. '>

            <div className='grid gap-10 lg:grid-cols-2'>
                {services.map(({ id, image, title }) => (
                    <div key={id} className='flex flex-col items-center justify-center p-5 shadow-lg  shadow-white dark:shadow-black rounded-xl duration-300 ease-in-out hover:scale-110' >
                        <img src={image} alt={title} className='w-36 h-36 md:w-44 md:h-44' />
                        <h3 className='mt-5 text-base'>{title}</h3>
                    </div>
                ))}

            </div>

        </Section>


    )


}

export default Services
