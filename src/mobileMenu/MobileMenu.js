import react from 'react'
import style from './MobileMenu.module.css'

const MobileMenu = ({ setMobileMenu, mobileMenu }) => {
    return (
        <aside className={mobileMenu ? 'block absolute bg-main w-full rounded-3xl p-12 text-4xl font-semibold' : 'hidden absolute'}>
            <ul className='list-none'>
                <li className='py-4 px-8 mb-8 border-b-4 cursor-pointer rounded-3xl border-main hover:border-opposite'>
                    Account
                </li>
                <li className='py-4 px-8 mb-8 border-b-4 cursor-pointer rounded-3xl border-main hover:border-opposite'>
                    Notes
                </li>
                <li className='py-4 px-8 mb-8 border-b-4 cursor-pointer rounded-3xl border-main hover:border-opposite'>
                    Tags
                </li>
                <li className='py-4 px-8 mb-8 border-b-4 cursor-pointer rounded-3xl border-main hover:border-opposite'>
                    Attachments
                </li>
                <li className='py-4 px-8 border-b-4 cursor-pointer rounded-3xl border-main hover:border-opposite'>
                    Sync
                </li>
            </ul>
        </aside>
    )
}

export default MobileMenu