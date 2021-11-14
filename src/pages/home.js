import '../styles/home.css'

import MakeAChange from '../images/makeAChange.jpg'
import AustinFlyer from '../images/austinFlyer.png'
import Grocery from '../images/grocery.jpg'
import Donate from '../images/donate.jpg'

import ShowcaseCard from '../components/showcaseCard'
import { CardGroup } from 'react-bootstrap'

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
            <h2 className='services-header'>What We Do</h2>

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

    {/* <div>
    <h2 class="text-center" >Some of our Previous Projects</h2>
     <div id="carouselExampleIndicators" class="carousel slide mt-5 mb-5" data-ride="carousel" data-aos="slide-up" data-aos-duration="1750">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="./home/srilanka.jpg" alt="First slide" />
            <div class="carousel-caption d-none d-md-block">
                <h5>Care Package Campaign 2020</h5>
                <p>...</p>
              </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="./home/carepackage2" alt="Second slide" />
            <div class="carousel-caption d-none d-md-block">
                <h5>Care Package Campaign 2020</h5>
                <p>...</p>
              </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="./home/target1.jpg" alt="Third slide" />
            <div class="carousel-caption d-none d-md-block">
                <h5>Gift Card Fundraiser</h5>
                <p>...</p>
              </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
        </div>
        </div>

        <footer class="text-center text-white" >
            <div class="container pt-4">
              <section class="mb-4">

                <a
                  class="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="https://www.instagram.com/community_connector/"
                  role="button"
                  target="_blank"
                  rel="noreferrer"
                  data-mdb-ripple-color="dark"
                  ><i class="fab fa-2x fa-instagram"></i
                ></a>

                <a
                  class="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="https://www.linkedin.com/company/com-connector"
                  role="button"
                  target="_blank"
                  rel="noreferrer"
                  data-mdb-ripple-color="dark"
                  ><i class="fab fa-2x fa-linkedin" />
                </a>

                <a
                  class="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="https://github.com/Koolmale/Com-Connect"
                  role="button"
                  target="_blank"
                  rel="noreferrer"
                  data-mdb-ripple-color="dark"
                  ><i class="fab fa-2x fa-github" />
                </a>
              </section>
            </div>
          
            <div class="text-center text-dark p-3" >
              © 2021 Copyright:
              <a class="text-dark" href="https://comconnector.com/">ComConnector.com</a>
            </div>
          </footer> */}
        </div>
    )
}

export default Home