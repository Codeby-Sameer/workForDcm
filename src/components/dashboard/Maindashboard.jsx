const Maindashboard = () => {
    return <>
        <div class="content-page">
            <div class="content">





                <div className="mb-5">

                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAhKzpW6bOe02wDN6Ahx4EH4uoT6qX0rYNWw&s" class="d-block w-100 " style={{ height: '200px' }} alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAhKzpW6bOe02wDN6Ahx4EH4uoT6qX0rYNWw&s" class="d-block w-100 " style={{ height: '200px' }} alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="data:image/jpeg;base64,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" class="d-block w-100 " style={{ height: '250px' }} alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>

                {/* <!-- Start Content--> */}
                <div class="container-fluid">


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



                    {/* <div class="row">
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


                    </div>  */}
                    <div>
                        <div>
                            <div className="d-flex justify-content-between w-75">
                            <h5>Enrolled Courses</h5>
                            <div>
                                See All
                            </div>

                            </div>
                            <div>
                                 <div class="row">
                            <div class="col-lg-4">
                                <div class="card">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col-md-5">
                                            <img class="card-img img-fluid rounde" src="assets/images/small/img-8.jpg" alt="Card image"/ >
                                        </div>
                                        <div class="col-md-7">
                                            <div class="card-body">
                                                <h5 class="card-title mb-1">Java</h5>
                                                <p class="card-text text-muted">This is a wider card with supporting text below .</p>
                                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end card --> */}
                            </div>
                            {/* <!-- end col --> */}
                            <div class="col-lg-4">
                                <div class="card">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col-md-7">
                                            <div class="card-body">
                                                <h5 class="card-title mb-1">Card title</h5>
                                                <p class="card-text text-muted">This is a wider card with supporting text below .</p>
                                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                        <div class="col-md-5">
                                            <img class="card-img img-fluid" src="assets/images/small/img-9.jpg" alt="Card image"/>
                                        </div>
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