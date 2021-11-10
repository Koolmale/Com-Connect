import '../styles/home.css'

function Home() {
    return (
        <div className='home body'>
            <div className="intro-background">
                <div className="intro">
                    <h2>Community<br />Connector</h2>
                    
                    <hr />
                    
                    <h3>Its About Giving Now</h3>
                    <h4>Connecting people to create a better community</h4>
                </div>
            </div> 

            {/* <main>
                <div class="container">
                    <section id="mission" class="text-left"> 
                        <div>
                            <div class="row no-gutters missiontxt">
                                <div class="col">
                                    <div class="px-2" >
                                        <h4 class="display-3 text-center pb-3 mission1" data-aos="slide-up" data-aos-duration="1000">Our Mission</h4>
                                        <p data-aos="slide-up" data-aos-duration="1750" class="text-center">These are unprecedented times. We know that everyone wants to help, and many need help, but there's no one to connect them. With Community Connector, we will connect people in need of groceries with people who want to help. Just put what you need and we'll get it to you!</p>
                                    </div>
                                    
                                </div>
                                <div class="col text-center d-flex img1 mission1" data-aos="slide-up" data-aos-duration="2000" id="testimg">
                                    <img src={MainBanner} class=" shadow-lg rounded testimg" alt=""  />
                                </div>
                            </div>
                      </div> 

                        
                        
                    </section> 

                </div>
            </main>

       <section id="services" class="container">
        <h2 class="display-4 text-center mt-5" >What We Do</h2>
        
        <div class="row text-center">
           <div class="col-md-4 mb-4">
              <div class="card h-100" data-aos="slide-up" data-aos-duration="1250">d
                <img class="card-img-top" src="./home/austin.png" alt="Austin Fundraiser" />                 
                <div class="card-body">
                    <h4 class="card-title">Fundraisers</h4>
                    <p class="card-text">We run various fundraisers throughout the year. By teaming with many youth groups and organizations, we are able to support those in need. </p>
                 </div>
                 <div class="card-footer py-4">
                    <a href="/#" class="btn btn-secondary">See more &raquo;</a>
                 </div>
              </div>
           </div>
           
           <div class="col-md-4 mb-4" data-aos="slide-up" data-aos-duration="1500">
              <div class="card h-100">
                 <img class="card-img-top" src="./home/maria-lin-kim-8RaUEd8zD-U-unsplash.jpg" alt="Grocery" />
                 <div class="card-body">
                    <h4 class="card-title">Grocery</h4>
                       <p class="card-text">We know the pandemic has impacted many people. With help from many volunteers, we have been able to successfully deliver groceries all over the Bay Area.</p>
                 </div>
                 <div class="card-footer py-4">
                    <a href="/#" class="btn btn-secondary">Volunteer &raquo;</a>
                 </div>
              </div>
           </div>
           
           <div class="col-md-4 mb-4" data-aos="slide-up" data-aos-duration="1750">
              <div class="card h-100">
                 <img class="card-img-top" src="./home/donate.JPG" alt="Donatex" />
                 <div class="card-body">
                    <h4 class="card-title">Donate</h4>
                    <p class="card-text">Donations go towards families that have been affected by the pandemic.</p>
                 </div>
                 <div class="card-footer py-4">
                    <a href="/#" class="btn btn-secondary">Donate Now &raquo;</a>
                 </div>
              </div>
           </div>
        </div>
     </section>

    <div>
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