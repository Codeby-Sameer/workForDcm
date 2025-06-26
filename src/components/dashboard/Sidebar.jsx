const Sidebar=()=>{
    return<>
      <div class="app-sidebar-menu">
            <div class="h-100" data-simplebar>

                {/* <!--- Sidemenu --> */}
                <div id="sidebar-menu">

                    <div class="logo-box">
                        <a class='logo logo-light' href='index.html'>
                            <span class="logo-sm">
                                <img src="/img/logo-sm.png" alt="" height="22" />
                            </span>
                            <span class="logo-lg">
                                <img src="/img/logo-light.png" alt="" height="24" />
                            </span>
                        </a>
                        <a class='logo logo-dark' href='index.html'>
                            <span class="logo-sm">
                                <img src="/img/logo-sm.png" alt="" height="22" />
                            </span>
                            <span class="logo-lg">
                                <img src="/img/logo-dark.png" alt="" height="24" />
                            </span>
                        </a>
                    </div>

                    <ul id="side-menu" >

                        <li class="menu-title">Menu</li>

                        <li className="ms-4">
                            <a href="#sidebarDashboards" className="text-decoration-none" data-bs-toggle="collapse">
                                
                                <span> Dashboard </span>
                                
                            </a>
                         
                        </li>

                        <li class="menu-title">Pages</li>

                        <li className="ms-4">
                          <a href="#"className="text-decoration-none">My Courses</a>
                    
                        </li>
                        <li className="ms-4">
                          <a href="#"className="text-decoration-none">live Classes</a>
                    
                        </li>
                        <li className="ms-4">
                          <a href="#"className="text-decoration-none">Certificates</a>
                    
                        </li>
                        <li className="ms-4">
                          <a href="#"className="text-decoration-none"> Schedule / Calendar</a>
                    
                        </li>
                        <li className="ms-4">
                          <a href="#"className="text-decoration-none"> Settings

</a>
                    
                        </li>


                    </ul>

                </div>
                {/* <!-- End Sidebar --> */}

                <div class="clearfix"></div>

            </div>
        </div>
    </>
}
 export default Sidebar