import Footer from "./footer";


const ManPower=()=>{
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
                  <h1 className="text-white mb-0">Man Power Support</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses */}
         <section
          className="call-to-action ptb-100 "
          style={{ color:"black"}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-8">
                <div className="call-to-action-content text-black">
                  <h2 className="text-black mb-1">Your Trusted Partner for Manpower Support That Delivers</h2>
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
      </div>

      <Footer />
    </>
}

export default ManPower;