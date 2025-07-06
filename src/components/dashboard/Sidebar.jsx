// import { Link } from "react-router-dom"


// const Sidebar = () => {
//     return <>
//         <div className="app-sidebar-menu">
//             <div className="h-100" data-simplebar>

//                 {/* <!--- Sidemenu --> */}
//                 <div id="sidebar-menu">

//                     <div className="logo-box">
//                         <a className='logo logo-light' href='index.html'>
//                             <span className="logo-sm">
//                                 <img src="/img/logo-color.png" alt="" height="22" />
//                             </span>
//                             <span className="logo-lg">
//                                 <img src="img/logo-color.png" alt="" height="24" />
//                             </span>
//                         </a>
//                         <a className='logo logo-dark' href='index.html'>
//                             <span className="logo-sm">
//                                 <img src="img/logo-color.png" alt="" height="22" />
//                             </span>
//                             <span className="logo-lg">
//                                 <img src="img/logo-color.png" alt="" height="24" />
//                             </span>
//                         </a>
//                     </div>

//                     <ul id="side-menu" >

//                         <li className="menu-title">Menu</li>

//                         <li className="ms-4  ">
//                             <Link to='/dashboard' className="text-decoration-none ">
//                                 <i data-feather='home' className="" ></i>
//                                 Dashboard

//                             </Link>
//                         </li>

//                         <li className="menu-title">Pages</li>

//                         <li className="ms-4 mb-2  ">
//                             <Link to='mycourses' className="text-decoration-none" >
//                                 <i data-feather="book-open"></i>
//                                 Enrolled Courses</Link>

//                         </li>

//                         <li className="ms-4 mb-2">
//                             < Link to='syllabus' className="text-decoration-none">
//                                 <i data-feather='book'></i>
//                                 Syllabus
//                                 </Link>
//                         </li>

//                         <li className="  ms-4 mb-2  ">
//                             <Link to='calendar' className="text-decoration-none">
//                                 <i data-feather="user"></i> Classes

//                             </Link>

//                         </li>
//                         <li className="  ms-4 mb-2  ">
//                             <Link to='settings' className="text-decoration-none">
//                                 <i data-feather="settings"></i> Settings

//                             </Link>

//                         </li>
//                         <li className="ms-4 mb-2 border-1 ">
//                             <a href="#" className="text-decoration-none">
//                                 <i data-feather="log-out"> </i>Logout

//                             </a>

//                         </li>
//                     </ul>

//                 </div>
//                 {/* <!-- End Sidebar --> */}

//                 <div className="clearfix"></div>

//             </div>
//         </div>
//     </>
// }
// export default Sidebar
// import { NavLink } from 'react-router-dom';

// const Sidebar = () => {
//   const menuItems = [
//     { label: 'Dashboard', icon: 'home', path: '/dashboard' },
//     { label: 'Enrolled Courses', icon: 'book-open', path: 'mycourses' },
//     { label: 'Syllabus', icon: 'book', path: 'syllabus' },
//     { label: 'Classes', icon: 'calendar', path: 'calendar' },
//     { label: 'Settings', icon: 'settings', path: 'settings' },
//   ];

//   return (
//     <aside className="app-sidebar-menu bg-light shadow-sm">
//       <div className="h-100 overflow-auto px-2 pt-4" data-simplebar>

//         {/* Logo */}
//         <div className="text-center mb-4">
//           <NavLink to="/dashboard" className="d-block text-decoration-none">
//             <img src="/img/logo-color.png" alt="Logo" height="32" />
//           </NavLink>
//         </div>

//         {/* Navigation Menu */}
//         <nav id="sidebar-menu">
//           <ul className="list-unstyled">

//             <li className="menu-title text-muted small fw-bold px-3 mb-2">Menu</li>

//             {menuItems.map(({ label, icon, path }, index) => (
//               <li key={index}>
//                 <NavLink
//                   to={path}
//                   className={({ isActive }) =>
//                     `d-flex align-items-center px-3 py-2 rounded text-decoration-none ${
//                       isActive ? 'bg-primary text-white fw-semibold' : 'text-dark'
//                     }`
//                   }
//                 >
//                   <i data-feather={icon} className="me-2" />
//                   <span>{label}</span>
//                 </NavLink>
//               </li>
//             ))}

//             <li className="menu-title text-muted small fw-bold px-3 mt-4 mb-2">Account</li>

//             <li>
//               <a href="#" className="d-flex align-items-center px-3 py-2 text-decoration-none text-danger">
//                 <i data-feather="log-out" className="me-2" />
//                 <span>Logout</span>
//               </a>
//             </li>
//           </ul>
//         </nav>

//       </div>
//     </aside>
//   );
// };

// export default Sidebar;
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { label: 'Dashboard', icon: 'home', path: '/dashboard', exact: true },
    { label: 'Enrolled Courses', icon: 'book-open', path: 'mycourses' },
    { label: 'Syllabus', icon: 'book', path: 'syllabus' },
    { label: 'Classes', icon: 'calendar', path: 'calendar' },
    { label: 'Settings', icon: 'settings', path: 'settings' },
  ];

  return (
    <aside className="app-sidebar-menu  shadow-sm">
      <div className="h-100" data-simplebar>

        {/* Logo */}
        <div className="logo-box text-center py-3">
          <NavLink to="/dashboard" className="text-decoration-none">
            <img src="/img/logo-color.png" alt="Logo" height="30" />
          </NavLink>
        </div>

        {/* Navigation */}
        <nav id="sidebar-menu">
          <ul className="list-unstyled" id="side-menu">

            <li className="menu-title text-muted px-3 fw-bold small mb-2">Menu</li>

            {menuItems.map(({ label, icon, path, exact }, index) => (
              <li key={index} className="ms-3 mb-2">
                <NavLink
                  to={path}
                  end={exact} // only for dashboard route
                  className={({ isActive }) =>
                    `tp-link text-decoration-none d-flex align-items-center px-3 py-2 rounded ${
                      isActive ? 'menuitem-active active bg-primary text-white fw-semibold' : 'text-dark'
                    }`
                  }
                >
                  <i data-feather={icon} className="me-2" />
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}

            <li className="menu-title text-muted px-3 fw-bold small mt-4 mb-2">Account</li>

            <li className="ms-3 mb-2">
              <a href="#" className="text-decoration-none d-flex align-items-center px-3 py-2 text-danger">
                <i data-feather="log-out" className="me-2" />
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </aside>
  );
};

export default Sidebar;