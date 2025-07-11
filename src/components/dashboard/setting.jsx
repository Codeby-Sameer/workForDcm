const Setting=()=>{
    return<>
    <div className="content-page bg-light">
       <div className="m-3 p-3">
         <h4>Settings</h4>
        <div class="tab-pane pt-4" id="profile_setting" role="tabpanel">
                                                <div class="row">

                                                    <div class="row">
                                                        <div class="col-lg-6 col-xl-6">
                                                            <div class="card border">

                                                                <div class="card-header">
                                                                    <div class="row align-items-center">
                                                                        <div class="col">                      
                                                                            <h4 class="card-title mb-0">Personal Information</h4>                      
                                                                        </div>
                                                                        {/* <!--end col-->                                                        */}
                                                                    </div>
                                                                </div>

                                                                <div class="card-body">
                                                                    <div class="form-group mb-3 row">
                                                                        <label class="form-label">First Name</label>
                                                                        <div class="col-lg-12 col-xl-12">
                                                                            <input class="form-control" type="text" value="Charles"/>
                                                                        </div>
                                                                    </div>

                                                                    <div class="form-group mb-3 row">
                                                                        <label class="form-label">Last Name</label>
                                                                        <div class="col-lg-12 col-xl-12">
                                                                            <input class="form-control" type="text" value="Buncle"/>
                                                                        </div>
                                                                    </div>

                                                                    <div class="form-group mb-3 row">
                                                                        <label class="form-label">Contact Phone</label>
                                                                        <div class="col-lg-12 col-xl-12">
                                                                            <div class="input-group">
                                                                                <span class="input-group-text"><i class="mdi mdi-phone-outline"></i></span>
                                                                                <input class="form-control" type="text" placeholder="Phone" aria-describedby="basic-addon1" value="+61 399615"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="form-group mb-3 row">
                                                                        <label class="form-label">Email Address</label>
                                                                        <div class="col-lg-12 col-xl-12">
                                                                            <div class="input-group">
                                                                                <span class="input-group-text"><i class="mdi mdi-email"></i></span>
                                                                                <input type="text" class="form-control" value="CharlesBuncle@dayrep.com" placeholder="Email" aria-describedby="basic-addon1"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="form-group mb-3 row">
                                                                        <label class="form-label">Company</label>
                                                                        <div class="col-lg-12 col-xl-12">
                                                                            <input class="form-control" type="text" value="zoyothemes"/>
                                                                        </div>
                                                                    </div>

                                                                    <div class="form-group mb-3 row">
                                                                        <label class="form-label">City</label>
                                                                        <div class="col-lg-12 col-xl-12">
                                                                            <input class="form-control" type="text" value="Adelaide"/>
                                                                        </div>
                                                                    </div>

                                                                    <div class="form-group mb-3 row">
                                                                        <label class="form-label">Address</label>
                                                                        <div class="col-lg-12 col-xl-12">
                                                                            <input class="form-control" type="text" value="Australia"/>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                {/* <!--end card-body--> */}
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-6 col-xl-6">
                                                            <div class="card border mb-0">

                                                                <div class="card-header">
                                                                    <div class="row align-items-center">
                                                                        <div class="col">                      
                                                                            <h4 class="card-title mb-0">Change Password</h4>                      
                                                                        </div>
                                                                        {/* <!--end col-->                                                        */}
                                                                    </div>
                                                                </div>

                                                                <div class="card-body mb-0">
                                                                    <div class="form-group mb-3 row">
                                                                        <label class="form-label">Old Password</label>
                                                                        <div class="col-lg-12 col-xl-12">
                                                                            <input class="form-control" type="password" placeholder="Old Password"/>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group mb-3 row">
                                                                        <label class="form-label">New Password</label>
                                                                        <div class="col-lg-12 col-xl-12">
                                                                            <input class="form-control" type="password" placeholder="New Password"/>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group mb-3 row">
                                                                        <label class="form-label">Confirm Password</label>
                                                                        <div class="col-lg-12 col-xl-12">
                                                                            <input class="form-control" type="password" placeholder="Confirm Password"/>
                                                                        </div>
                                                                    </div>

                                                                    <div class="form-group row">
                                                                        <div class="col-lg-12 col-xl-12">
                                                                            <button type="submit" class="btn btn-primary ">Change Password</button>
                                                                            <button type="button" class="btn btn-danger m-4">Cancel</button>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                {/* <!--end card-body--> */}
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div> 
       </div>
    </div>

    </>
}
export default Setting