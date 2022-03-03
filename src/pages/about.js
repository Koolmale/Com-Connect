import '../styles/about.css'
import Logo2 from '../images/logo2.png'
import Maskcart from '../images/maskcart.jpg'

function About() {
    return (
        <div className="about body">
            <div className="about-banner">
                <h2 className='about-banner-title'>About<br/>Us</h2>
            </div>

            <h3>Our Story</h3>
            <div className='about-section-container'>
                <p>
                    Community Connector is a non-profit founded by two eleventh grade students at Rise Academy. Our mission is to make an impact in today's society and help those in need. Our organization operates in the Bay Area, primarily in the Tri-Valley and Fremont Area.
                </p>
                <div className='about-section-img-wrapper'>
                    <img src={Logo2} alt='Logo 2' />
                </div>
            </div>

            <h3>Why?</h3>
            <div className='about-section-container'>
                <div className='about-section-img-wrapper'>
                    <img src={Maskcart} alt='Maskcart' />
                </div>
                <p>
                    There are many senior citizens and impoverished people who are in desperate need of help. The COVID-19 pandemic has left many of them stuck inside their homes with no one to help them. It is everyone's duty to help those in need, and they're the people who need it the most right now.
                </p>
            </div>
        </div>
    )
}

export default About