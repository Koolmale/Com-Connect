import '../styles/about.css'
import Logo2 from '../images/logo2.png'
import Maskcart from '../images/maskcart.jpg'
import ScrollAnimation from 'react-animate-on-scroll'

function About() {
    return (
        <div className="about body">
            <div className="about-banner">
                <h2 className='about-banner-title'>About<br/>Us</h2>
            </div>

            <ScrollAnimation animateIn='animate__slideInUp' animateOnce={true}>
                <h3>Our Story</h3>
            </ScrollAnimation>
            <div className='about-section-container'>
                <ScrollAnimation animateIn='animate__slideInLeft about-section-paragraph' animateOnce={true}>
                    <p>
                        Community Connector is a non-profit founded by two eleventh grade students at Rise Academy. Our mission is to make an impact in today's society and help those in need. Our organization operates in the Bay Area, primarily in the Tri-Valley and Fremont Area.
                    </p>
                </ScrollAnimation>
                    <div className='about-section-img-wrapper'>
                        <ScrollAnimation animateIn='animate__slideInRight' animateOnce={true}>
                            <img src={Logo2} alt='Logo 2' />
                        </ScrollAnimation>
                    </div>
            </div>

            <ScrollAnimation animateIn='animate__slideInUp' animateOnce={true}>
                <h3>Why?</h3>
            </ScrollAnimation>
            <div className='about-section-container'>
                <div className='about-section-img-wrapper'>
                    <ScrollAnimation animateIn='animate__slideInRight' animateOnce={true}>
                        <img src={Maskcart} alt='Maskcart' />
                    </ScrollAnimation>
                </div>
                <ScrollAnimation animateIn='animate__slideInRight about-section-paragraph' animateOnce={true}>
                    <p>
                        There are many senior citizens and impoverished people who are in desperate need of help. The COVID-19 pandemic has left many of them stuck inside their homes with no one to help them. It is everyone's duty to help those in need, and they're the people who need it the most right now.
                    </p>
                </ScrollAnimation>
            </div>

            <ScrollAnimation animateIn='animate__slideInUp' animateOnce={true}>
                <h3 className='about-what-header'>What?</h3>
            </ScrollAnimation>
            <div className='about-what-flex'>
                <div>
                    <ScrollAnimation animateIn='animate__slideInUp' animateOnce={true}>
                        <h4>Grocery</h4>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='animate__slideInUp' animateOnce={true}>
                        <p>We are looking for people to pick up essentials and groceries for those in need.This includes the elderly as well as anyone who does not have money.</p>
                    </ScrollAnimation>
                </div>
                <div>
                    <ScrollAnimation animateIn='animate__slideInUp' animateOnce={true}>
                        <h4>Donate</h4>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='animate__slideInUp' animateOnce={true}>
                        <p>This money will go toward those who are in need. Whether they are struggling financially or are unemployed, these donations will help people to recover and come back stronger.</p>
                    </ScrollAnimation>
                </div>
            </div>

            <hr />

            <h2 className='about-conclusion animate__animated animate__bounce animate__infinite animate__slow'>With your help, we can expand our community and build a better future!</h2>
        </div>
    )
}

export default About