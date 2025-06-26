const Maindashboard=()=>{
    return<>
     <div class="content-page">
            <div class="content">

                {/* <!-- Start Content--> */}
                <div class="container-fluid">
                    <div class="py-3 d-flex align-items-sm-center flex-sm-row flex-column">
                        <div class="flex-grow-1">
                            <h4 class="fs-18 fw-semibold m-0">Dashboard</h4>
                        </div>
                    </div>

                    {/* <!-- Start Main Widgets --> */}
                    <div class="row">
                      

                        <div class="col-md-6 col-lg-4 col-xl">
                            <div class="card">
                                <div class="card-body">
                                    <div class="widget-first">

                                        <div class="d-flex align-items-center mb-2">
                                            <div
                                                class="p-2 border border-secondary border-opacity-10 bg-secondary-subtle rounded-2 me-2">
                                                <div class="bg-secondary rounded-circle widget-size text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                        viewBox="0 0 24 24">
                                                        <path fill="#ffffff"
                                                            d="m10 17l-5-5l1.41-1.42L10 14.17l7.59-7.59L19 8m-7-6A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <p class="mb-0 text-dark fs-15">Task Pending</p>
                                        </div>

                                        <div class="d-flex justify-content-between align-items-center">
                                            <h3 class="mb-0 fs-22 text-dark me-3">29</h3>
                                            <div class="text-center">
                                                <span class="text-danger fs-14 me-2"><i
                                                    class="mdi mdi-trending-down fs-14"></i> 1.5%</span>
                                                <p class="text-dark fs-13 mb-0">Last 7 days</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                   

                       

                        <div class="col-md-12 col-lg-6 col-xl">
                            <div class="card">
                                <div class="card-body">
                                    <div class="widget-first">

                                        <div class="d-flex align-items-center mb-2">
                                            <div
                                                class="p-2 border border-success border-opacity-10 bg-success-subtle rounded-2 me-2">
                                                <div class="bg-success rounded-circle widget-size text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                        viewBox="0 0 24 24">
                                                        <g fill="none" stroke="#ffffff" stroke-linecap="round"
                                                            stroke-linejoin="round" stroke-width="2">
                                                            <path d="M5 19L19 5" />
                                                            <circle cx="7" cy="7" r="3" />
                                                            <circle cx="17" cy="17" r="3" />
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <p class="mb-0 text-dark fs-15">Conversion Rate</p>
                                        </div>


                                        <div class="d-flex justify-content-between align-items-center">
                                            <h3 class="mb-0 fs-22 text-dark me-3">14.57%</h3>

                                            <div class="text-muted">
                                                <span class="text-primary fs-14 me-2"><i
                                                    class="mdi mdi-trending-up fs-14"></i> 5.8%</span>
                                                <p class="text-dark fs-13 mb-0">Last 7 days</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!-- End Main Widgets --> */}

               

                    <div class="row">
                        <div class="col-xl-3">
                            <div class="card">
                                <div class="card-header">
                                    <div class="d-flex align-items-center">
                                        <h5 class="card-title mb-0">Your Recent Perfomance</h5>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <div id="browservisiting" class="apex-charts"></div>

                                    <div class="text-center fw-medium my-3">78% increase in company growth.</div>

                                    <div class="d-flex gap-3 justify-content-between">
                                        <div class="d-flex">
                                            <div
                                                class="bg-primary-subtle rounded-2 p-1 me-2 border border-dashed border-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 24 24">
                                                    <path fill="#108dff"
                                                        d="M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15" />
                                                </svg>
                                            </div>
                                            <div class="d-flex flex-column">
                                                <small>
                                                    <script>document.write(new Date().getFullYear() - 1)</script>
                                                </small>
                                                <h6 class="mb-0 fs-15">$32.5k</h6>
                                            </div>
                                        </div>

                                        <div class="d-flex">
                                            <div
                                                class="bg-success-subtle rounded-2 p-1 me-2 border border-dashed border-success">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 24 24">
                                                    <path fill="#287F71" d="M12 12V2c5.523 0 10 4.477 10 10z"
                                                        opacity="0.25" />
                                                    <path fill="#287F71" d="m12 12l5 8.66A10.01 10.01 0 0 0 22 12z"
                                                        opacity="0.5" />
                                                    <path fill="#287F71"
                                                        d="M17 20.66L12 12V2c-5.523.002-9.999 4.48-9.997 10.003c.002 5.523 4.48 9.999 10.004 9.997A10 10 0 0 0 17 20.662l.003-.005l-.004.003z" />
                                                </svg>
                                            </div>
                                            <div class="d-flex flex-column">
                                                <small>
                                                    <script>document.write(new Date().getFullYear() - 2)</script>
                                                </small>
                                                <h6 class="mb-0 fs-15">$41.2k</h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                
                    </div>
                </div>
                {/* <!-- container-fluid --> */}
            </div>
            {/* <!-- content --> */}


        </div>
    </>
} 
export default Maindashboard