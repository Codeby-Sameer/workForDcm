import { useEffect, useState } from 'react';
const Topbar=()=>{

      const toggleFullscreen = () => {
    const doc = document;
    const docEl = document.documentElement;

    if (
      doc.fullscreenElement ||
      doc.webkitFullscreenElement ||
      doc.mozFullScreenElement
    ) {
      if (doc.exitFullscreen) doc.exitFullscreen();
      else if (doc.webkitCancelFullScreen) doc.webkitCancelFullScreen();
      else if (doc.mozCancelFullScreen) doc.mozCancelFullScreen();
    } else {
      if (docEl.requestFullscreen) docEl.requestFullscreen();
      else if (docEl.webkitRequestFullscreen) docEl.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      else if (docEl.mozRequestFullScreen) docEl.mozRequestFullScreen();
    }

    document.body.classList.toggle("fullscreen-enable");
  };

  useEffect(() => {
    const handleExit = () => {
      if (
        !document.fullscreenElement &&
        !document.webkitFullscreenElement &&
        !document.mozFullScreenElement
      ) {
        document.body.classList.remove("fullscreen-enable");
      }
    };

    document.addEventListener("fullscreenchange", handleExit);
    document.addEventListener("webkitfullscreenchange", handleExit);
    document.addEventListener("mozfullscreenchange", handleExit);

    return () => {
      document.removeEventListener("fullscreenchange", handleExit);
      document.removeEventListener("webkitfullscreenchange", handleExit);
      document.removeEventListener("mozfullscreenchange", handleExit);
    };
  }, []);



  const [sidebarHidden, setSidebarHidden] = useState(false);
   const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("__CONFIG__");
    return saved ? JSON.parse(saved).theme : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("__CONFIG__", JSON.stringify({ theme }));
  }, [theme]);

  useEffect(() => {
    if (window.feather) {
      window.feather.replace();
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    // On window resize, update sidebar visibility
    const handleResize = () => {
      setSidebarHidden(window.innerWidth < 1040);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Sync state with body attribute
    document.body.setAttribute("data-sidebar", sidebarHidden ? "hidden" : "default");
  }, [sidebarHidden]);

  const toggleSidebar = () => {
    setSidebarHidden(prev => !prev);
  };

    return<>

    <div className="topbar-custom">
            <div className="container-fluid">
                <div className="d-flex justify-content-between">
                    <ul className="list-unstyled topnav-menu mb-0 d-flex align-items-center">
                         <li>
                                <button className ="button-toggle-menu nav-link" onClick={toggleSidebar}>
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
                                    <input type="text" className="form-control  ms-1 ps-5" placeholder="Search..." />
                                    <i data-feather="search" className=" fs-5 position-absolute text-muted top-50 translate-middle-y ms-3"></i>
                                </div>
                            </form>
                        </li>

                        <li className="d-none d-sm-flex">
                            <button type="button" className="btn nav-link" data-toggle="fullscreen" onClick={toggleFullscreen}>
                                <i data-feather="maximize" className="align-middle fullscreen noti-icon"></i>
                            </button>
                        </li>

                        <li className="d-none d-sm-flex">
                            <button type="button" className="btn nav-link" id="light-dark-mode" onClick={toggleTheme}>
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
                                    {/* <!-- item--> */}
                                    <div className="dropdown-item noti-title">
                                        <h5 className="m-0">
                                            <span className="float-end"><a href="#" className="text-dark"><small>Clear All</small></a></span>Notification
                                        </h5>
                                    </div>

                                    <div className="noti-scroll" data-simplebar>
                                        {/* <!-- item--> */}
                                        <a href="javascript:void(0);"
                                            className="dropdown-item notify-item text-muted link-primary active">
                                            <div className="notify-icon">
                                                <img src="assets/images/users/user-12.jpg" className="img-fluid rounded-circle" alt="" />
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <p className="notify-details">Carl Steadham</p>
                                                <small className="text-muted">5 min ago</small>
                                            </div>
                                            <p className="mb-0 user-msg">
                                                <small className="fs-14">Completed <span className="text-reset">Improve workflow in Figma</span></small>
                                            </p>
                                        </a>

                                        {/* <!-- item--> */}
                                        <a href="javascript:void(0);" classNameName="dropdown-item notify-item text-muted link-primary">
                                            <div className="notify-icon">
                                                <img src="assets/images/users/user-2.jpg" className="img-fluid rounded-circle" alt="" />
                                            </div>
                                            <div className="notify-content">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="notify-details">Olivia McGuire</p>
                                                    <small className="text-muted">1 min ago</small>
                                                </div>

                                                <div className="d-flex mt-2 align-items-center">
                                                    <div className="notify-sub-icon">
                                                        <i className="mdi mdi-download-box text-dark"></i>
                                                    </div>

                                                    <div>
                                                        <p className="notify-details mb-0">dark-themes.zip</p>
                                                        <small className="text-muted">2.4 MB</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>

                                        {/* <!-- item--> */}
                                        <a href="javascript:void(0);" className="dropdown-item notify-item text-muted link-primary">
                                            <div className="notify-icon">
                                                <img src="assets/images/users/user-3.jpg" className="img-fluid rounded-circle" alt="" />
                                            </div>
                                            <div className="notify-content">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="notify-details">Travis Williams</p>
                                                    <small className="text-muted">7 min ago</small>
                                                </div>
                                                <p className="noti-mentioned p-2 rounded-2 mb-0 mt-2">
                                                    <span className="text-primary">@Patryk</span> Please make sure that you're....
                                                </p>
                                            </div>
                                        </a>

                                        {/* <!-- item--> */}
                                        <a href="javascript:void(0);" className="dropdown-item notify-item text-muted link-primary">
                                            <div className="notify-icon">
                                                <img src="assets/images/users/user-8.jpg" className="img-fluid rounded-circle" alt="" />
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <p className="notify-details">Violette Lasky</p>
                                                <small className="text-muted">5 min ago</small>
                                            </div>
                                            <p className="mb-0 user-msg">
                                                <small className="fs-14">Completed <span className="text-reset">Create new components</span></small>
                                            </p>
                                        </a>

                                        {/* <!-- item--> */}
                                        <a href="javascript:void(0);" className="dropdown-item notify-item text-muted link-primary">
                                            <div className="notify-icon">
                                                <img src="assets/images/users/user-5.jpg" className="img-fluid rounded-circle" alt="" />
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <p className="notify-details">Ralph Edwards</p>
                                                <small className="text-muted">5 min ago</small>
                                            </div>
                                            <p className="mb-0 user-msg">
                                                <small className="fs-14">Completed<span className="text-reset">Improve workflow in React</span></small>
                                            </p>
                                        </a>

                                        {/* <!-- item--> */}
                                        <a href="javascript:void(0);" className="dropdown-item notify-item text-muted link-primary">
                                            <div className="notify-icon">
                                                <img src="assets/images/users/user-6.jpg" className="img-fluid rounded-circle" alt="" />
                                            </div>
                                            <div className="notify-content">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="notify-details">Jocab jones</p>
                                                    <small className="text-muted">7 min ago</small>
                                                </div>
                                                <p className="noti-mentioned p-2 rounded-2 mb-0 mt-2">
                                                    <span className="text-reset">@Patryk</span> Please make sure that you're....
                                                </p>
                                            </div>
                                        </a>
                                    </div>

                                    {/* <!-- All--> */}
                                    <a href="javascript:void(0);" className="dropdown-item text-center text-primary notify-item notify-all">View all
                                        <i className="fe-arrow-right"></i>
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