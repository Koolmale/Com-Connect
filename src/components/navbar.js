import '../styles/navbar.css'

import Logo from '../images/logo.png'

import ClickOutside from './clickOutside.js'
import { useState } from 'react'


function NavBar() {

    let [dropdown, setDropdown] = useState(false);

    return (
        <nav>
            <div className='nav-bar'>
                <div className='nav-side'>
                    <a href='/' className='nav-logo-container'>
                        <img src={Logo} alt='logo'/>
                    </a>
                    <a href='/' className='nav-title'>Community Connector</a>
                </div>
                <div className='nav-side'>
                    <a href='/help' className='nav-item'>Help Us</a>
                    <a href='/past_projects' className='nav-item'>Past Projects</a>
                    <div className='nav-dropdown-container nav-item'>
                        <span>About</span>
                        <div className='nav-dropdown-arrow' onClick={() => setDropdown(!dropdown)}/>

                    </div>
                </div>
            </div>
            
            <ClickOutside onClick={() => setDropdown(false)}>
                <ul className={`nav-dropdown ${dropdown ? '' : 'hidden'}`}>
                    <a href='/about'>About</a>
                    <a href='/team'>Team</a>
                    <a href='/contact'>Contact</a>
                </ul>
            </ClickOutside>
        </nav>
    )
}

export default NavBar;