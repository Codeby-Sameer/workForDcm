import data from "../../data/data.json"
const Mycourses=()=>{
    const courses=data.courses
    return<div className="content-page">
<h3 className="m-3">Enrolled Courses</h3>
<div className="row m-2">
    
                            
                            <div class="col-sm-6 col-xl-3">
                                <div class="card d-block">
                                    <img class="card-img-top rounded-top" src="/img/javaImg.png" alt="Card image cap"/>
                                    <div class="card-body">
                                        <h4 class="card-title">JAVA</h4>
                                        <p class="card-text text-muted">Some quick example text to build on the card..</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Cras justo odio</li>
                                    </ul>
                                    <div class="card-body">
                                        <a href="javascript: void(0);" class="card-link fw-medium">Card link</a>
                                        <a href="javascript: void(0);" class="card-link fw-medium">Another link</a>
                                    </div>
                                     {/* <!-- end card-body--> */}
                                </div>
                                 {/* <!-- end card--> */}
                            </div>
                            {/* <!-- end col --> */}



                             <div class="col-xl-6">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Ratio Video 16:9</h5>
                                    </div>
                                    {/* <!-- end card header --> */}

                                    <div class="card-body">
                                        <div class="ratio ratio-16x9">
                                            <iframe src="https://www.youtube.com/embed/O151OAc3nqQ" title="YouTube video" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div> 
                                {/* <!-- end card--> */}

                               
                                
                            </div>
</div>





    </div>

    
        
}
export default Mycourses