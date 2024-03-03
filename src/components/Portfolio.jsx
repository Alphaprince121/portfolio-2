import React from 'react'
import Section from './common/Section'
import { FaExternalLinkSquareAlt, FaGithub } from 'react-icons/fa'
import img1 from '../assest/img1.jpg'
import img2 from '../assest/img2.jpg'
import img3 from '../assest/img3.jpg'
import img4 from '../assest/img4.jpg'
import img5 from '../assest/img5.jpg'

const Portfolio = () => {

    const projects =[
        {
            id:1,
            image:img1,
            title:"Best App",
            github:'',
            demo:'https://prince-cloths.netlify.app/',
        },
        {
            id:2,
            image:img2,
            title:"Best App",
            github:'',
            demo:'https://liqua.netlify.app/',
        },
        {
            id:3,
            image:img3,
            title:"Best App",
            github:'',
            demo:'https://lifestylers.netlify.app/',
        },
        {
            id:4,
            image:img4,
            title:"Best App",
            github:'',
            demo:'https://date-with-me.netlify.app/',
        },
        {
            id:5,
            image:img5,
            title:"Best App",
            github:'',
            demo:'https://restaurant-website121.netlify.app/',
        },
        
    ]
    return (
        <Section title="Portfolio 📩" subtitle='These are all the projects that i have worked on.Some of them i have worked before i gained some experience. So to gentle on them.' >

        <div className='grid gap-8 lg:gap-14 lg:grid-cols-2 px-14'>
        {projects.map(({id, image, title, github, demo}) =>(

            <div key={id} className='max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden '>
                <img src={image} alt={title} className='w-2/3' />
                <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                    <h2>{title}</h2>
                    <a className='text-2xl cursor-pointer duration-150 hover:scale-110' href={github} target='_blank' rel='noopener noreferrer'><FaGithub/></a>
                    <a className='text-2xl cursor-pointer duration-150 hover:scale-110' href={demo} ><FaExternalLinkSquareAlt/></a>
                </div>
            </div>

        ))}

        </div>
        </Section>
    )
}

export default Portfolio
