const Dashboard = () => {
    return <>        <div id="app-layout">
        {/* topbar open */}
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
                            <h5 className="mb-0">Good Morning, Alex</h5>
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
                                <img src="assets/images/users/user-13.jpg" alt="user" className="rounded-circle" />
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
        {/* topbar end */}
        {/* <!-- Left Sidebar Start --> */}
        <div class="app-sidebar-menu">
            <div class="h-100" data-simplebar>

                {/* <!--- Sidemenu --> */}
                <div id="sidebar-menu">

                    <div class="logo-box">
                        <a class='logo logo-light' href='index.html'>
                            <span class="logo-sm">
                                <img src="assets/images/logo-sm.png" alt="" height="22" />
                            </span>
                            <span class="logo-lg">
                                <img src="assets/images/logo-light.png" alt="" height="24" />
                            </span>
                        </a>
                        <a class='logo logo-dark' href='index.html'>
                            <span class="logo-sm">
                                <img src="assets/images/logo-sm.png" alt="" height="22" />
                            </span>
                            <span class="logo-lg">
                                <img src="assets/images/logo-dark.png" alt="" height="24" />
                            </span>
                        </a>
                    </div>

                    <ul id="side-menu">

                        <li class="menu-title">Menu</li>

                        <li>
                            <a href="#sidebarDashboards" data-bs-toggle="collapse">
                                <i data-feather="home"></i>
                                <span> Dashboard </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarDashboards">
                                <ul class="nav-second-level">
                                    <li>
                                        <a class='tp-link' href='index.html'>CRM</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='analytics.html'>Analytics</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='ecommerce.html'>eCommerce</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='projects.html'>Projects</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='hrm.html'>HRM</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='jobs.html'>Jobs</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="menu-title">Pages</li>

                        <li>
                            <a href="#sidebarAuth" data-bs-toggle="collapse">
                                <i data-feather="users"></i>
                                <span> Authentication </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarAuth">
                                <ul class="nav-second-level">
                                    <li>
                                        <a class='tp-link' href='auth-login.html'>Log In</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='auth-register.html'>Register</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='auth-recoverpw.html'>Recover Password</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='auth-lock-screen.html'>Lock Screen</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='auth-confirm-mail.html'>Confirm Mail</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='email-verification.html'>Email Verification</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='auth-logout.html'>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <a href="#sidebarError" data-bs-toggle="collapse">
                                <i data-feather="alert-octagon"></i>
                                <span> Error Pages </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarError">
                                <ul class="nav-second-level">
                                    <li>
                                        <a class='tp-link' href='error-404.html'>Error 404</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='error-500.html'>Error 500</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='error-503.html'>Error 503</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='error-429.html'>Error 429</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='offline-page.html'>Offline Page</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <a href="#sidebarExpages" data-bs-toggle="collapse">
                                <i data-feather="file-text"></i>
                                <span> Utility </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarExpages">
                                <ul class="nav-second-level">
                                    <li>
                                        <a class='tp-link' href='pages-starter.html'>Starter</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='pages-profile.html'>Profile</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='pages-pricing.html'>Pricing</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='pages-timeline.html'>Timeline</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='pages-invoice.html'>Invoice</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='pages-faqs.html'>FAQs</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='pages-gallery.html'>Gallery</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='pages-maintenance.html'>Maintenance</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='pages-coming-soon.html'>Coming Soon</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="menu-title mt-2">Apps</li>

                        <li>
                            <a class='tp-link' href='apps-todolist.html'>
                                <i data-feather="columns"></i>
                                <span> Todo List </span>
                            </a>
                        </li>

                        <li>
                            <a class='tp-link' href='apps-contacts.html'>
                                <i data-feather="map-pin"></i>
                                <span> Contacts </span>
                            </a>
                        </li>

                        <li>
                            <a class='tp-link' href='apps-calendar.html'>
                                <i data-feather="calendar"></i>
                                <span> Calendar </span>
                            </a>
                        </li>

                        <li class="menu-title mt-2">General</li>

                        <li>
                            <a href="#sidebarBaseui" data-bs-toggle="collapse">
                                <i data-feather="package"></i>
                                <span> Components </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarBaseui">
                                <ul class="nav-second-level">
                                    <li>
                                        <a class='tp-link' href='ui-accordions.html'>Accordions</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='ui-alerts.html'>Alerts</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='ui-badges.html'>Badges</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='ui-breadcrumb.html'>Breadcrumb</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='ui-buttons.html'>Buttons</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='ui-cards.html'>Cards</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='ui-collapse.html'>Collapse</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='ui-dropdowns.html'>Dropdowns</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='ui-video.html'>Embed Video</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='ui-grid.html'>Grid</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='ui-images.html'>Images</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='ui-list.html'>List Group</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='ui-modals.html'>Modals</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='ui-placeholders.html'>Placeholders</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='ui-pagination.html'>Pagination</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='ui-popovers.html'>Popovers</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='ui-progress.html'>Progress</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='ui-scrollspy.html'>Scrollspy</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='ui-spinners.html'>Spinners</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='ui-tabs.html'>Tabs</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='ui-tooltips.html'>Tooltips</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='ui-typography.html'>Typography</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <a class='tp-link' href='widgets.html'>
                                <i data-feather="aperture"></i>
                                <span> Widgets </span>
                            </a>
                        </li>

                        <li>
                            <a href="#sidebarAdvancedUI" data-bs-toggle="collapse">
                                <i data-feather="cpu"></i>
                                <span> Extended UI </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarAdvancedUI">
                                <ul class="nav-second-level">
                                    <li>
                                        <a class='tp-link' href='extended-carousel.html'>Carousel</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='extended-notifications.html'>Notifications</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='extended-offcanvas.html'>Offcanvas</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='extended-range-slider.html'>Range Slider</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <a href="#sidebarIcons" data-bs-toggle="collapse">
                                <i data-feather="award"></i>
                                <span> Icons </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarIcons">
                                <ul class="nav-second-level">
                                    <li>
                                        <a class='tp-link' href='icons-feather.html'>Feather Icons</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='icons-mdi.html'>Material Design Icons</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <a href="#sidebarForms" data-bs-toggle="collapse">
                                <i data-feather="briefcase"></i>
                                <span> Forms </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarForms">
                                <ul class="nav-second-level">
                                    <li>
                                        <a class='tp-link' href='forms-elements.html'>General Elements</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='forms-validation.html'>Validation</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='forms-quilljs.html'>Quilljs Editor</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='forms-pickers.html'>Picker</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <a href="#sidebarTables" data-bs-toggle="collapse">
                                <i data-feather="table"></i>
                                <span> Tables </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarTables">
                                <ul class="nav-second-level">
                                    <li>
                                        <a class='tp-link' href='tables-basic.html'>Basic Tables</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='tables-datatables.html'>Data Tables</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <a href="#sidebarCharts" data-bs-toggle="collapse">
                                <i data-feather="pie-chart"></i>
                                <span> Apex Charts </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarCharts">
                                <ul class="nav-second-level">
                                    <li>
                                        <a class='tp-link' href='charts-area.html'>Area</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='charts-bar.html'>Bar</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='charts-boxplot.html'>Boxplot</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='charts-bubble.html'>Bubble</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='charts-candlestick.html'>Candlestick</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='charts-column.html'>Column</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='charts-funnel.html'>Funnel</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='charts-heatmap.html'>Heatmap</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='charts-line.html'>Line</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='charts-mixed.html'>Mixed</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='charts-pie.html'>Pie</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='charts-polararea.html'>Polar</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='charts-radar.html'>Radar</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='charts-radialbar.html'>Radialbar</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='charts-rangearea.html'>Range Area</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='charts-scatter.html'>Scatter</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='charts-timeline.html'>Timeline</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='charts-treemap.html'>Treemap</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <a href="#sidebarMaps" data-bs-toggle="collapse">
                                <i data-feather="map"></i>
                                <span> Maps </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarMaps">
                                <ul class="nav-second-level">
                                    <li>
                                        <a class='tp-link' href='maps-google.html'>Google Maps</a>
                                    </li>
                                    <li>
                                        <a class='tp-link' href='maps-vector.html'>Vector Maps</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                    </ul>

                </div>
                {/* <!-- End Sidebar --> */}

                <div class="clearfix"></div>

            </div>
        </div>
        {/* <!-- Left Sidebar End --> */}
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
                                                class="p-2 border border-primary border-opacity-10 bg-primary-subtle rounded-2 me-2">
                                                <div class="bg-primary rounded-circle widget-size text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                        viewBox="0 0 24 24">
                                                        <path fill="#ffffff"
                                                            d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <p class="mb-0 text-dark fs-15">Total Customers</p>
                                        </div>

                                        <div class="d-flex justify-content-between align-items-center">
                                            <h3 class="mb-0 fs-22 text-dark me-3">3,456</h3>
                                            <div class="text-center">
                                                <span class="text-primary fs-14"><i
                                                    class="mdi mdi-trending-up fs-14"></i> 12.5%</span>
                                                <p class="text-dark fs-13 mb-0">Last 7 days</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

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
                                            <h3 class="mb-0 fs-22 text-dark me-3">2,839</h3>
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
    </div>

    </>
}
export default Dashboard