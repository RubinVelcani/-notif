import react from 'react'

const Header = ({ setMobileMenu, mobileMenu }) => {
    return (
        <header className='flex flex-row justify-between max-w-screen-lg mx-auto p-8'>
            <div className='flex flex-row items-center'>
                <img onClick={setMobileMenu} className={mobileMenu ? 'p-4 hidden' : 'p-4 block'} src='./Images/hamburger.svg' alt='a' />
                <img onClick={setMobileMenu} className={mobileMenu ? 'p-4 block' : 'p-4 hidden'} src='./Images/avatar.svg' alt='a' />
                <h1 className={mobileMenu ? 'font-bold text-4xl' : 'font-bold text-2xl hidden'}>Rubin Velcani</h1>              
            </div>
            <div className='flex '>
                <img className='p-4 mr-4' src='./Images/write.svg' alt='a' />
                <img className='p-4' src='./Images/search.svg' alt='a' />
            </div>
        </header>
    )
}

export default Header