import Footer from "./footer"
import { useEffect } from 'react';

const AboutUs=()=>{


  useEffect(() => {
    // Wait for DOM to be ready, then initialize Owl
    const initCarousel = () => {
      if (window.$ && window.$('.owl-carousel').length > 0) {
        window.$('.owl-carousel').owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          items: 1,
          autoplay: true,
        });
      }
    };

    // Run after short delay to ensure DOM is ready
    setTimeout(initCarousel, 100); 

  }, []);




    return<>
        <div class="main">

        {/* <!--header section start--> */}
        <section class="hero-section ptb-100 gradient-overlay"
            style={{background: "url('img/header-bg-5.jpg')no-repeat center center / cover"}}>
            <div class="hero-bottom-shape-two"
                style={{background: "url('img/hero-bottom-shape.svg')no-repeat bottom center"}}></div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-7">
                        <div class="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
                            <h1 class="text-white mb-0">About Us</h1>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--header section end--> */}

        {/* <!--promo section start--> */}
        <section class="promo-section pt-100">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-lg-4">
                        <div class="single-promo-block p-3 rounded d-flex justify-content-between">
                            <div class="promo-block-icon mr-4">
                                <span class="fas fa-brain icon-md color-primary"></span>
                            </div>
                            <div class="promo-block-content">
                                <h5>Consultancy</h5>
                                <p>Enthusiastically scale mission-critical imperatives rather than an expanded array.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="single-promo-block p-3 rounded d-flex justify-content-between">
                            <div class="promo-block-icon mr-4">
                                <span class="fas fa-bezier-curve icon-md color-primary"></span>
                            </div>
                            <div class="promo-block-content">
                                <h5>Manpower Support</h5>
                                <p>Compellingly promote collaborative products without synergistic schemas. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="single-promo-block p-3 rounded d-flex justify-content-between">
                            <div class="promo-block-icon mr-4">
                                <span class="fas fa-life-ring icon-md color-primary"></span>
                            </div>
                            <div class="promo-block-content">
                                <h5>Corporate Trainings</h5>
                                <p>Rapidiously create cooperative resources rather than client-based leadership skills.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--promo section end--> */}

        {/* <!--about us section start--> */}
        <section class="about-us-section ptb-100">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-md-12 col-lg-5">
                        <div class="video-promo-content mb-md-4 mb-lg-0">
                            <h2>Empowering People. Elevating Organizations.</h2>
                            <p>we believe that success begins with the right people, empowered by the right knowledge.
                                We specialize in providing industry-relevant corporate training, expert consulting
                                services, and reliable manpower support to help businesses unlock their full potential.
                                Our mission is to bridge the gap between talent and opportunity with impactful,
                                future-ready solutions.</p>

                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6">
                        <div class="card border-0 shadow-sm text-white">
                            <img src="img/about-2.jpg" alt="video" class="img-fluid rounded shadow-sm"/>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--about us section end--> */}

        {/* <!--our work process section start--> */}
        <section class="work-process-new ptb-100 gray-light-bg mb-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-9 col-lg-8">
                        <div class="section-heading text-center mb-5">
                            <h4>"To be the most reliable and impactful partner in corporate development and human
                                resource solutions.</h4>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="work-process-wrap text-start">
                            <div class="single-work-process ">

                                <div class="work-process-content mt-4 ">
                                    <h5> First-Class Business Solutions</h5>
                                    <p>We deliver strategic solutions that enhance organizational performance and
                                        productivity. From leadership development to workflow optimization, our services
                                        are built to meet modern business challenges</p>
                                </div>
                            </div>
                            <div class="single-work-process">

                                <div class="work-process-content mt-4">
                                    <h5>Corporate Training Programs</h5>
                                    <p>We design training programs that develop both technical skills and leadership
                                        qualities. Our goal is to help your teams stay competitive and confident in a
                                        rapidly changing business landscape. </p>
                                </div>
                            </div>
                            <div class="single-work-process">

                                <div class="work-process-content mt-4">
                                    <h5>Consulting services for Growth</h5>
                                    <p>Our consultants bring real-world expertise to help companies streamline
                                        operations, improve decision-making, and build scalable business models.</p>
                                </div>
                            </div>
                            <div class="single-work-process">

                                <div class="work-process-content mt-4">
                                    <h5> Manpower Support Services</h5>
                                    <p>We help organizations find, retain, and manage top talent. Whether you need
                                        contract staffing, permanent hires, or project-based support, DCM delivers
                                        workforce solutions that work. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--our work process section end --> */}

        {/* <!--testimonial section start--> */}
        <section class="customer-testimonial-section ptb-100 gray-light-bg">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-8">
                        <div class="section-heading text-center mb-4">
                            <h2>What People Says About Us</h2>
                            <p class="lead">Distinctively grow go forward manufactured products and optimal networks.
                                Enthusiastically
                                disseminate outsourcing through revolutionary</p>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center justify-content-between">
                    <div class="col-md-5 col-lg-5">
                        <div class="owl-carousel owl-theme client-testimonial-1 custom-dot">
                            <div class="item">
                                <div class="testimonial-quote-wrap">
                                    <div class="client-say">
                                        <p><span class="fas fa-quote-left"></span> Interactively optimize
                                            fully researched expertise vis-a-vis plug-and-play relationships.
                                            Intrinsicly
                                            develop viral core competencies for fully tested customer service.
                                            Enthusiastically create next-generation growth strategies and.</p>
                                    </div>
                                    <div class="media author-info my-3">
                                        <div class="author-img mr-3">
                                            <img src="img/user-speak-svgrepo-com.svg" alt="client"
                                                class="img-fluid rounded-circle"/>
                                        </div>
                                        <div class="media-body">
                                            <h5 class="mb-0">John Charles</h5>
                                            <span>BizBite</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimonial-quote-wrap">
                                    <div class="client-say">
                                        <p><span class="fas fa-quote-left"></span> Rapidiously develop user
                                            friendly growth strategies after extensive initiatives. Conveniently grow
                                            innovative benefits through fully tested deliverables. Rapidiously utilize
                                            focused platforms through end-to-end schemas.</p>
                                    </div>
                                    <div class="media author-info my-3">
                                        <div class="author-img mr-3">
                                            <img src="img/user-speak-svgrepo-com.svg" alt="client"
                                                class="img-fluid rounded-circle"/>
                                        </div>
                                        <div class="media-body">
                                            <h5 class="mb-0">Arabella Ora</h5>
                                            <span>BizBite</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimonial-quote-wrap">
                                    <div class="client-say">
                                        <p><span class="fas fa-quote-left"></span> Objectively synthesize
                                            client-centered e-tailers for maintainable channels. Holisticly administrate
                                            customer directed vortals whereas tactical functionalities. Energistically
                                            monetize reliable imperatives through client-centric best practices.
                                            Collaboratively.</p>
                                    </div>
                                    <div class="media author-info my-3">
                                        <div class="author-img mr-3">
                                            <img src="img/user-speak-svgrepo-com.svg" alt="client"
                                                class="img-fluid rounded-circle"/>
                                        </div>
                                        <div class="media-body">
                                            <h5 class="mb-0">Kamal Hassan</h5>
                                            <span>BizBite</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">  
                                <div class="testimonial-quote-wrap">
                                    <div class="client-say">
                                        <p><span class="fas fa-quote-left"></span> Enthusiastically innovate
                                            B2C data without clicks-and-mortar convergence. Monotonectally deliver
                                            compelling testing procedures vis-a-vis B2B testing procedures. Competently
                                            evisculate integrated resources whereas global processes. Enthusiastically.
                                        </p>
                                    </div>
                                    <div class="media author-info my-3">
                                        <div class="author-img mr-3">
                                            <img src="img/user-speak-svgrepo-com.svg" alt="client"
                                                class="img-fluid rounded-circle"/>
                                        </div>
                                        <div class="media-body">
                                            <h5 class="mb-0">Rajnikanth</h5>
                                            <span>BizBite</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="single-counter white-bg shadow-sm p-4 rounded text-center border-0">
                                    <span class="ti-medall-alt color-secondary icon-md"></span>
                                    <h3 class="mb-0">1600</h3>
                                    <p>Active users</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="single-counter white-bg shadow-sm p-4 rounded text-center border-0">
                                    <span class="ti-headphone-alt color-secondary icon-md"></span>
                                    <h3 class="mb-0">2500</h3>
                                    <p>Global client</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="single-counter white-bg shadow-sm p-4 rounded text-center border-0">
                                    <span class="ti-cup color-secondary icon-md"></span>
                                    <h3 class="mb-0">2150</h3>
                                    <p>Win award</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="single-counter white-bg shadow-sm p-4 rounded text-center border-0">
                                    <span class="ti-user color-secondary icon-md"></span>
                                    <h3 class="mb-0">2150</h3>
                                    <p>Clients satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--testimonial section end--> */}




    </div>
    <Footer></Footer>

    
    </>
}
export default AboutUs