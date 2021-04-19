import react, { useState } from 'react'
import InfoCards from './InfoCards'

const Main = () => {

    return (
        <main className='w-full h-screen'>
            <div className='w-4/5 mx-auto'>
                <InfoCards icon='Write' src='./Images/notes.svg' />
                <InfoCards icon='Celebrate' src='./Images/celebration.svg' />
                <InfoCards icon='Calm' src='./Images/nature.svg' />
                <InfoCards icon='Appreciate' src='./Images/specialOne.svg' />
                <InfoCards icon='Enjoy' src='./Images/happy.svg' />
                <button className='w-full bg-main py-10 mx-auto mt-32 rounded-3xl text-4xl text-white font-bold'>Get started</button>
            </div>
        </main>
    )
}

export default Main