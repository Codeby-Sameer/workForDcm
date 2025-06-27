const Topbar=()=>{
    return<>

      <div className="topbar-custom">
            <div className="container-fluid">
                <div className="d-flex justify-content-between">
                    <ul className="list-unstyled topnav-menu mb-0 d-flex align-items-center">
                        <li>
                            <button className="button-toggle-menu nav-link">
                                <i data-feather="menu" className="noti-icon"></i>
                            </button>
                        </li>
                        <li className="d-none d-lg-block">
                            <h5 className="mb-0">Welcome  Sam</h5>
                        </li>
                    </ul>

                    <ul className="list-unstyled topnav-menu mb-0 d-flex align-items-center">
                        <li className="d-none d-lg-block">
                            <form className="app-search d-none d-md-block me-auto">
                                <div className="position-relative topbar-search">
                                    <input type="text" className="form-control ps-4" placeholder="Search..." />
                                    <i className="mdi mdi-magnify fs-16 position-absolute text-muted top-50 translate-middle-y ms-2"></i>
                                </div>
                            </form>
                        </li>

                        <li className="d-none d-sm-flex">
                            <button type="button" className="btn nav-link" data-toggle="fullscreen">
                                <i data-feather="maximize" className="align-middle fullscreen noti-icon"></i>
                            </button>
                        </li>

                        <li className="d-none d-sm-flex">
                            <button type="button" className="btn nav-link" id="light-dark-mode">
                                <i data-feather="moon" className="align-middle dark-mode"></i>
                                <i data-feather="sun" className="align-middle light-mode"></i>
                            </button>
                        </li>

                        <li className="dropdown notification-list topbar-dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i data-feather="bell" className="noti-icon"></i>
                                <span className="badge bg-danger rounded-circle noti-icon-badge">9</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-lg">
                                <div className="dropdown-item noti-title">
                                    <h5 className="m-0">
                                        <span className="float-end"><a href="#" className="text-dark"><small>Clear All</small></a></span>Notification
                                    </h5>
                                </div>
                                <div className="noti-scroll" data-simplebar>
                                    {/* Notifications list (shortened for brevity) */}
                                </div>
                                <a href="#" className="dropdown-item text-center text-primary notify-item notify-all">
                                    View all <i className="fe-arrow-right"></i>
                                </a>
                            </div>
                        </li>

                        <li className="dropdown notification-list topbar-dropdown">
                            <a className="nav-link dropdown-toggle nav-user me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <img src="/img/users/user-13.jpg" alt="user" className="rounded-circle" />
                                <span className="pro-user-name ms-1">Alex <i className="mdi mdi-chevron-down"></i></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end profile-dropdown">
                                <div className="dropdown-header noti-title">
                                    <h6 className="text-overflow m-0">Welcome !</h6>
                                </div>
                                <a className="dropdown-item notify-item" href="pages-profile.html">
                                    <i className="mdi mdi-account-circle-outline fs-16 align-middle"></i>
                                    <span>My Account</span>
                                </a>
                                <a className="dropdown-item notify-item" href="auth-lock-screen.html">
                                    <i className="mdi mdi-lock-outline fs-16 align-middle"></i>
                                    <span>Lock Screen</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item notify-item" href="auth-logout.html">
                                    <i className="mdi mdi-location-exit fs-16 align-middle"></i>
                                    <span>Logout</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}
export default Topbar