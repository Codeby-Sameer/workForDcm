import { Link } from "react-router-dom"

const Sidebar = () => {

    return <>
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
                            <Link to='/dashboard' className="text-decoration-none" data-bs-toggle="collapse">

                                <span> Dashboard </span>

                            </Link>

                        </li>

                        <li class="menu-title">Pages</li>

                        <li className="ms-4">
                            <Link to='/dashboard/mycourses' className="text-decoration-none" >Enrolled Courses</Link>

                        </li>


                        <li className="ms-4">
                            <a href="#" className="text-decoration-none"> Syllabus</a>

                        </li>


                        <li className="ms-4">
                            <a href="#" className="text-decoration-none"> Settings

                            </a>

                        </li>
                        <li className="ms-4">
                            <a href="#" className="text-decoration-none"> Logout

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