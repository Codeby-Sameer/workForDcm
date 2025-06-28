import Footer from "./footer";


const Consultancy=()=>{
    return <>
      <div className="main">
        {/* Header section */}
        <section
          className="hero-section ptb-100 gradient-overlay"
          style={{
            background: "url('img/header-bg-5.jpg') no-repeat center center / cover",
          }}
        >
          <div
            className="hero-bottom-shape-two"
            style={{
              background: "url('img/hero-bottom-shape.svg') no-repeat bottom center",
            }}
          ></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-7">
                <div className="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
                  <h1 className="text-white mb-0">Consultancy</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses */}
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
      </div>

      <Footer />
    </>
}

export default Consultancy;