import { Link } from "react-router-dom"

const Maindashboard = () => {
    
    return <>
        <div className="content-page">
            <div className="content">
                <div className="container-fluid">
                    <div className="m-2 p-3">

                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="img/small/img-6.jpg" className="d-block w-100 " style={{ height: '200px' }} alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="img/small/img-7.jpg" className="d-block w-100 " style={{ height: '200px' }} alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="img/small/img-8.jpg" className="d-block w-100 " style={{ height: '200px' }} alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                </div>





                <div className="container-fluid">
                    {/* <!-- Start Content--> */}


                    {/* <!-- Start Main Widgets --> */}
                    <div className="row m-2">



                        <div className="col-md-4 col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="widget-first">

                                        <div className="d-flex align-items-center mb-2">
                                            <div
                                                className="p-2 border border-secondary border-opacity-10 bg-secondary-subtle rounded-2 me-2">
                                                <div className="bg-secondary rounded-circle widget-size text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                        viewBox="0 0 24 24">
                                                        <path fill="#ffffff"
                                                            d="m10 17l-5-5l1.41-1.42L10 14.17l7.59-7.59L19 8m-7-6A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <p className="mb-0 text-dark fs-15">Task Pending</p>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <h3 className="mb-0 fs-22 text-dark me-3">29</h3>
                                            <div className="text-center">
                                                <span className="text-danger fs-14 me-2"><i
                                                    className="mdi mdi-trending-down fs-14"></i> 1.5%</span>
                                                <p className="text-dark fs-13 mb-0">Last 7 days</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="widget-first">

                                        <div className="d-flex align-items-center mb-2">
                                            <div
                                                className="p-2 border border-secondary border-opacity-10 bg-secondary-subtle rounded-2 me-2">
                                                <div className="bg-secondary rounded-circle widget-size text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                        viewBox="0 0 24 24">
                                                        <path fill="#ffffff"
                                                            d="m10 17l-5-5l1.41-1.42L10 14.17l7.59-7.59L19 8m-7-6A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <p className="mb-0 text-dark fs-15">Task Pending</p>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <h3 className="mb-0 fs-22 text-dark me-3">29</h3>
                                            <div className="text-center">
                                                <span className="text-danger fs-14 me-2"><i
                                                    className="mdi mdi-trending-down fs-14"></i> 1.5%</span>
                                                <p className="text-dark fs-13 mb-0">Last 7 days</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="col-md-4 col-lg-4 ">
                            <div className="card">
                                <div className="card-body">
                                    <div className="widget-first">

                                        <div className="d-flex align-items-center mb-2">
                                            <div
                                                className="p-2 border border-success border-opacity-10 bg-success-subtle rounded-2 me-2">
                                                <div className="bg-success rounded-circle widget-size text-center">
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
                                            <p className="mb-0 text-dark fs-15">Conversion Rate</p>
                                        </div>


                                        <div className="d-flex justify-content-between align-items-center">
                                            <h3 className="mb-0 fs-22 text-dark me-3">14.57%</h3>

                                            <div className="text-muted">
                                                <span className="text-primary fs-14 me-2"><i
                                                    className="mdi mdi-trending-up fs-14"></i> 5.8%</span>
                                                <p className="text-dark fs-13 mb-0">Last 7 days</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!-- End Main Widgets --> */}

                    <div>
                        <div  style={{width:'550px'}} className="m-4 p-2  ">
                            <div className="d-flex justify-content-between ">
                                <h4>Enrolled Courses</h4>
                                <div>
                                    
                                     <Link to="mycourses">View More</Link>
                                </div>

                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-md-5">
                                                    <img className="card-img img-fluid rounde" src="img/small/img-8.jpg" alt="Card image" />
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="card-body">
                                                        <h5 className="card-title mb-1">Java</h5>
                                                        <p className="card-text text-muted">This is a wider card with supporting text below .</p>
                                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end card --> */}
                                    </div>
                                    {/* <!-- end col --> */}

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