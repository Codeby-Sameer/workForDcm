import { Link } from "react-router-dom"

const Signup=()=>{
    return <>
    <div class="main">

    {/* <!--hero background image with content slider start--> */}
    <section class="hero-section hero-bg-2 ptb-100 full-screen">
        <div class="container">
            <div class="row align-items-center justify-content-between pt-5 pt-sm-5 pt-md-5 pt-lg-0">
                <div class="col-md-7 col-lg-6">
                    <div class="hero-content-left text-white">
                        <h1 class="text-white">Create Your Account</h1>
                        <p class="lead">
                            Keep your face always toward the sunshine - and shadows will fall behind you.
                        </p>
                    </div>
                </div>
                <div class="col-md-5 col-lg-5">
                    <div class="card login-signup-card shadow-lg mb-0">
                        <div class="card-body px-md-5 py-5">
                            <div class="mb-5">
                                <h6 class="h3">Create account</h6>
                                <p class="text-muted mb-0">Made with love by developers for developers.</p>
                            </div>
                            <form class="login-signup-form">
                                <div class="form-group">
                                    {/* <!-- Label --> */}
                                    <label class="pb-1">
                                        Your Name
                                    </label>
                                    {/* <!-- Input group --> */}
                                    <div class="input-group input-group-merge">
                                        <div class="input-icon">
                                            <span class="ti-user color-primary"></span>
                                        </div>
                                        <input type="text" class="form-control" placeholder="Enter your name"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    {/* <!-- Label --> */}
                                    <label class="pb-1">
                                        Email Address
                                    </label>
                                    {/* <!-- Input group --> */}
                                    <div class="input-group input-group-merge">
                                        <div class="input-icon">
                                            <span class="ti-email color-primary"></span>
                                        </div>
                                        <input type="email" class="form-control" placeholder="name@address.com"/>
                                    </div>
                                </div>

                                {/* <!-- Password --> */}
                                <div class="form-group">
                                    {/* <!-- Label --> */}
                                    <label class="pb-1">
                                        Password
                                    </label>
                                    {/* <!-- Input group --> */}
                                    <div class="input-group input-group-merge">
                                        <div class="input-icon">
                                            <span class="ti-lock color-primary"></span>
                                        </div>
                                        <input type="password" class="form-control"
                                               placeholder="Enter your password"/>
                                    </div>
                                </div>

                                <div class="my-4">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" class="custom-control-input" id="check-terms"/>
                                        <label class="custom-control-label" for="check-terms">I agree to the <a href="#">terms and conditions</a></label>
                                    </div>
                                </div>

                                {/* <!-- Submit --> */}
                                <button class=" btn-block secondary-solid-btn rounded-2  mt-4 mb-3">
                                    Sign up
                                </button>
                            </form>

                        </div>
                        <div class="card-footer px-md-5 bg-transparent border-top"><small>Already have an acocunt?</small>
                            <Link to='/login'>Sign in</Link></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--hero background image with content slider end--> */}


</div>
    
    
    </>
}
export default Signup