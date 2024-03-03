import React from 'react'

const Section = ({title, subtitle, children}) => {
    return (
        <section className='min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center'>
        <h3 className='py-3 text-3xl lg:text-5xl '>{title}</h3>
        <p className='max-w-xl font-light bg-gray-900 dark:bg-white text-white dark:text-gray-900 mb-10 text-sm md:text-base'>{subtitle}</p>
        {children}
        </section>
    )
}

export default Section
