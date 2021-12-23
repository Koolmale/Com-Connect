import '../styles/navbar.css'

import Logo from '../images/logo.png'

import ClickOutside from './clickOutside.js'
import { useEffect, useState } from 'react'


function NavBar() {

    let [isVisible, setVisible] = useState(true);
    let [scrollY, setScrollY] = useState(0);
    let [aboutDropdown, setAboutDropdown] = useState(false);
    let [mobileDropdown, setMobileDropdown] = useState(false);

    const handleScroll = () => {
        
        if (window.scrollY > scrollY) {
            setVisible(false);
            setAboutDropdown(false);
            setMobileDropdown(false)
        } else {
            setVisible(true);
        }
        
        setScrollY(window.scrollY);
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    })

    const navLinks = (
        <div className='nav-links'>
            <a href='/help' className='nav-item'>Help Us</a>
            <a href='/past_projects' className='nav-item'>Past Projects</a>
            <div className='nav-about-dropdown-container nav-item'>
                <span>About</span>
                <div className='nav-about-dropdown-arrow' onClick={() => setAboutDropdown(!aboutDropdown)}/>
            </div>
        </div>
    )

    return (
        <nav>
            <div className='nav-container'>
                <div className={`nav-bar animate__animated animate__faster ${isVisible ? 'animate__slideInDown' : ' animate__slideOutUp'}`}>
                    <div className='nav-side nav-left'>
                        <a href='/' className='nav-logo-container'>
                            <img src={Logo} alt='logo'/>
                        </a>
                        <a href='/' className='nav-title'>Community Connector</a>
                    </div>

                    {/* Desktop nav */}
                    <div className='nav-side nav-right'>
                        {navLinks}
                    </div>

                    {/* Pops up for mobile */}
                    <i className='fas fa-bars nav-bars' onClick={() => setMobileDropdown(true)}/>


                </div>
                
                {/* About dropdown */}
                <ClickOutside onClick={() => setAboutDropdown(false)}>
                    <ul className={`nav-about-dropdown ${aboutDropdown && isVisible ? '' : 'hidden'}`}>
                        <a href='/about'>About</a>
                        <a href='/team'>Team</a>
                        <a href='/contact'>Contact</a>
                    </ul>
                </ClickOutside>
                
                {/* Mobile nav */}
                {
                    mobileDropdown &&
                    <ClickOutside onClick={() => setMobileDropdown(false)}>
                        <div className='nav-mobile-dropdown'>
                            {navLinks}
                        </div>
                    </ClickOutside>
                }

            </div>



        </nav>
    )
}

export default NavBar;