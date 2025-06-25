// src/pages/HomePage.js

import Footer from './footer';

const HomePage = () => {
  return (
    <>

      <div className="main">
        {/* Hero Section */}
        <section className="hero-equal-height pt-165 pb-100 overflow-hidden">
          <div className="hero-shape"></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-6">
                <div className="hero-slider-content">
                  <span className="text-uppercase">People First. Solutions Always</span>
                  <h1>Expert Training. Reliable Manpower. Proven Consulting</h1>
                  <p className="lead">
                    Holisticly procrastinate mission-critical convergence with reliable customer service. Assertively underwhelm idea-sharing for impactful solutions.
                  </p>
                  <div className="action-btns mt-3 ">
                    <button href="#" className="accent-solid-btn  rounded-5 border border-light ">Get Start Now</button>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6"> 
                <div className="hero-animation-img">
                  <img src="/img/hero-animation-01.svg" alt="hero" className="img-fluid d-none d-lg-block animation-two" width="150" />
                  <img src="/img/hero-single-img-1.svg" alt="hero" className="animation-one" />
                  <img src="/img/hero-animation-03.svg" alt="hero" className="img-fluid d-none d-lg-block animation-four" width="250" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promo Section */}
        <section className="promo-block ptb-100 position-relative">
          <div className="shape-four"></div>
          <div className="container">
            <div className="row  ">
              {/* {[
              {
                icon: 'fab fa-superpowers',
                title: 'Corporate Trainings',
                text: 'Dramatically incentivize mission-critical process improvements through extensive benefits. Interactively visualize B2C e-markets with standards compliant e-commerce.',
                btn: 'Learn More',
              },
              {
                icon: 'far fa fa-users',
                title: 'Manpower Support',
                text: 'Conveniently synergize worldwide functionalities via global e-commerce. Distinctively actualize standards compliant experiences before real-time human capital.',
                btn: 'Get Support',
              },
              {
                icon: 'far fa-handshake',
                title: 'Consultancy',
                text: 'Conveniently synergize worldwide functionalities via global e-commerce. Distinctively actualize standards compliant experiences before real-time human capital.',
                btn: 'Learn More',
              }
            ].map((item, index) => (
              <div className="col-md-6 col-lg-4 box-2" key={index}>
                <div className={`single-promo-block promo-hover-bg-${(index % 2) + 1} hover-image p-5 text-center`}>
                  <div className="promo-block-icon mb-3">
                    <span className={`${item.icon} icon-md color-primary`}></span>
                  </div>
                  <div className="promo-block-content">
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                    <a href="#" className="btn accent-solid-btn mt-3">{item.btn}</a>
                  </div>
                </div>
              </div>
            ))} */}
              <div class="col-md-6 col-lg-4 box-1 ">
                <div class="single-promo-block promo-hover-bg-2 hover-image p-5 text-center">
                  <div class="promo-block-icon mb-3">
                    <span class="fab fa-superpowers icon-md color-primary"></span>
                  </div>
                  <div class="promo-block-content">
                    <h5>Corporate Trainings</h5>
                    <p>Dramatically incentivize mission-critical process improvements through extensive
                      benefits. Interactively visualize B2C e-markets with standards compliant e-commerce.
                    </p>
                    <button href="#" class="rounded-5 border   accent-solid-btn mt-3">Learn More</button>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 box-1">
                <div class="single-promo-block promo-hover-bg-2 hover-image p-5 text-center">
                  <div class="promo-block-icon mb-3">
                    <span class="far fa fa-users  icon-md color-primary"></span>
                  </div>
                  <div class="promo-block-content">
                    <h5>Manpower Support</h5>
                    <p>Conveniently synergize worldwide functionalities via global e-commerce. Distinctively
                      actualize standards compliant experiences before real-time human capital.</p>

                    <button href="#" className="accent-solid-btn  rounded-5 border   mt-3">Get Support</button>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 box-1 ">
                <div class="single-promo-block promo-hover-bg-2 hover-image p-5 text-center">
                  <div class="promo-block-icon mb-3">
                    <span class="far fa-handshake icon-md color-primary"></span>
                  </div>
                  <div class="promo-block-content">
                    <h5>Consultancy Services</h5>
                    <p>Conveniently synergize worldwide functionalities via global e-commerce. Distinctively
                      actualize standards compliant experiences before real-time human capital.</p>

                    <button href="#" class="accent-solid-btn  rounded-5 border  mt-3">Learn More</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="about-us-section ptb-100">
          <div className="container">
            <div className="row justify-content-around align-items-center">
              <div className="col-md-12 col-lg-5">
                <div className="about-content-right mb-md-4 mb-lg-0">
                  <h2>From Learning to Leading — We’re With You.</h2>
                  <p>Objectively productivate installed base technology whereas user friendly ROI. Phosfluorescently innovate functionalized potentialities through.</p>
                  <p>Proactively synergize prospective resources after interoperable e-commerce. Interactively strategize multimedia based vis-a-vis customer directed scenarios proactively enable value.</p>
                  <ul className="list-unstyled tech-feature-list">
                    <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Cost</strong> Accounting Fundamentals</li>
                    <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Corporate</strong> Cash Management</li>
                    <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>SEO</strong> Optimization Services</li>
                    <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Company</strong> Brand Solutions</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="row">
                  {[
                    { icon: 'fas fa-lightbulb', title: 'Business Consulting', text: 'Enthusiastically scale mission-critical imperatives rather than array.' },
                    { icon: 'fas fa-bezier-curve', title: 'Creative Design', text: 'Compellingly promote collaborative products without synergistic schemas.' },
                    { icon: 'fas fa-life-ring', title: 'Market Strategy', text: 'Rapidiously create cooperative resources rather than client-based leadership.' },
                    { icon: 'fas fa-brain', title: 'Valuable Idea', text: 'Enthusiastically scale mission-critical imperatives rather than array.' }
                  ].map((item, index) => (
                    <div className="col-12 col-md-6 col-lg-6" key={index}>
                      <div className="single-promo-block p-4 text-center rounded border my-md-3 my-lg-3 my-sm-0">
                        <div className="promo-block-icon mb-3">
                          <span className={`${item.icon} icon-md accent-color`}></span>
                        </div>
                        <div className="promo-block-content">
                          <h5>{item.title}</h5>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section
          className="call-to-action ptb-100 gradient-overlay"
          style={{ background: "url('/img/cta-bg.svg') no-repeat top center / cover fixed" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-8">
                <div className="call-to-action-content text-white  ">
                  <h2 className="text-white mb-1">Your Trusted Partner for Manpower Support That Delivers</h2>
                  <p className="lead">"Skilled, screened, and ready-to-deploy professionals across industries — when and where you need them."</p>
                
                  <div className='d-flex justify-content-center align-items-center'>
                    <div className=' d-flex flex-column'>
                      <span className="fa fa-check mb-3"></span>
                      <span className="fa fa-check mb-3 "></span>
                      <span className="fa fa-check mb-3 "></span>
                      <span className="fa fa-check mb-3 "></span>

                    </div>
                    <div>
                      <ul>
                        <li className='mb-2'>Verified & Trained Workforce</li>
                        <li className='mb-2'>Flexible Staffing Solutions</li>
                        <li className='mb-2'>Quick Deployment</li>
                        <li className='mb-2'>PAN-India Support</li>

                      </ul>

                    </div>
                  </div>
                  <div className='text-center'>

                  <button href="#" className=" outline-white-btn rounded-5 text-dark border mt-3  ">Get Support</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="our-blog-section ptb-100 gray-light-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="section-heading mb-5">
                  <h2>Our Latest News</h2>
                  <p className="lead">
                    Enthusiastically drive revolutionary opportunities before emerging leadership. Distinctively transform tactical methods of empowerment via resource.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {[1, 2, 3].map((n) => (
                <div className="col-md-4" key={n}>
                  <div className="single-blog-card card border-0 shadow-sm">
                    <span className={`category position-absolute badge badge-pill badge-${['primary', 'danger', 'info'][n - 1]}`}>Category</span>
                    <img src={`/img/blog/${n}.jpg`} className="card-img-top" alt="blog" />
                    <div className="card-body">
                      <h3 className="h5 mb-2 card-title"><a href="#">Blog Title {n}</a></h3>
                      <div className="post-meta mb-2">
                        <ul className="list-inline meta-list">
                          <li className="list-inline-item">Date</li>
                          <li className="list-inline-item"><span>XX</span> Comments</li>
                          <li className="list-inline-item"><span>XX</span> Share</li>
                        </ul>
                      </div>
                      <p className="card-text">Example blog content preview text.</p>
                      <a href="#" className="detail-link">Read more <span className="ti-arrow-right"></span></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="call-to-action py-5">
          <div className="container">
            <div className="row justify-content-around align-items-center">
              <div className="col-md-7">
                <div className="subscribe-content">
                  <h3 className="mb-1">Consulting Agency for Your Business</h3>
                  <p>Rapidiously engage fully tested e-commerce with progressive architectures.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="action-btn text-lg-right text-sm-left">
                  <button href="#" className=" secondary-solid-btn rounded-5">Contact With Us</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
