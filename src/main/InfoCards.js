import react from 'react'

const InfoCards = ({ icon, src }) => {
    return (
        <div className='w-4/5 rounded-3xl mx-auto ring-4 ring-opposite bg-opposite px-8 pb-16 mt-28 pt-48'>
            <div className='grid grid-cols-2'>
                <img className='col-start-2 col-span-1' src={src} />
                <div className=''>
                    <h2 className='col-start-1 col-span-1 font-bold text-3xl mb-4'>{icon}</h2>
                    <p className='text-xl'>Write down everything you need, wherever you are.</p>
                </div>
            </div>
        </div>
    )
}

export default InfoCards