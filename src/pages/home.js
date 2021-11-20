import '../styles/home.css'

import MakeAChange from '../images/makeAChange.jpg'
import AustinFlyer from '../images/austinFlyer.png'
import Grocery from '../images/grocery.jpg'
import Donate from '../images/donate.jpg'
import SriLanka from '../images/sriLanka.jpg'
import CarePackage from '../images/carePackage.png'
import Target from '../images/target.jpg'

import ShowcaseCard from '../components/showcaseCard'
import { CardGroup, Carousel } from 'react-bootstrap'

function Home() {
    return (
        <div className='home body'>
            <div className="intro-background">
                <div id="intro">
                    <h2>Community<br />Connector</h2>
                    
                    <hr />
                    
                    <h3>Its About Giving Now</h3>
                    <h4>Connecting people to create a better community</h4>
                </div>
            </div> 

            <main>
                <section id="mission"> 
                    <div className="mission-text-section">
                        <h4>Our Mission</h4>
                        <p>These are unprecedented times. We know that everyone wants to help, and many need help, but there's no one to connect them. With Community Connector, we will connect people in need of groceries with people who want to help. Just put what you need and we'll get it to you!</p>
                    </div>
                        
                    <div className="mission-img-wrapper">
                        <img src={MakeAChange} alt=""  />
                    </div>
                </section>
            </main>

            <section id="services">
                <h2 className='section-header'>What We Do</h2>

                <CardGroup className='service-list'>
                    <ShowcaseCard 
                        title="Fundraisers"
                        description="We run various fundraisers throughout the year. By teaming with many youth groups and organizations, we are able to support those in need."
                        image={AustinFlyer}
                        imageAlt="Austin Fundraiser"
                        buttonText="See more"
                        buttonLink="/#"
                    />

                    <ShowcaseCard 
                        title="Grocery"
                        description="We know the pandemic has impacted many people. With help from many volunteers, we have been able to successfully deliver groceries all over the Bay Area."
                        image={Grocery}
                        imageAlt="Grocery"
                        buttonText="See more"
                        buttonLink="/#"
                    />

                    <ShowcaseCard 
                        title="Donate"
                        description="Donations go towards families that have been affected by the pandemic."
                        image={Donate}
                        imageAlt="Donate"
                        buttonText="Donate Now"
                        buttonLink="/#"
                    />
                    
                </CardGroup>
                
            </section>

            <h3 className='section-header-small'>Some of our Previous Projects</h3>

            <div className='home-carousel-container'>
                <Carousel classname='home-carousel'>
                    <Carousel.Item>
                        <img
                            src={SriLanka}
                            alt="Sri Lanka"
                            className="home-carousel-image"
                        />
                        <Carousel.Caption>
                            <h3>Care Package Campaign 2020</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={CarePackage}
                            alt="Care Package"
                            className="home-carousel-image"
                        />

                        <Carousel.Caption>
                            <h3>Care Package Campaign 2020</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={Target}
                            alt="Target Gift Cards"
                            className="home-carousel-image"
                        />

                        <Carousel.Caption>
                            <h3>Gift Card Fundraiser</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    )
}

export default Home