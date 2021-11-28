import '../styles/navbar.css'

import Logo from '../images/logo.png'


function NavBar() {
    return (
        <nav>
            <div className='nav-side'>
                <a href='/' className='nav-logo-container'>
                    <img src={Logo} alt='logo'/>
                </a>
                <a href='/' className='nav-title'>Community Connector</a>
            </div>
            <div className='nav-side'>
                <a href='/help' className='nav-item'>Help Us</a>
                <a href='/past_projects' className='nav-item'>Past Projects</a>
                <span className='nav-item'>About</span>
            </div>
        </nav>
    )
}

export default NavBar;