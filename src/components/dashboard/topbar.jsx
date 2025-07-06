import { useEffect, useState } from 'react';
import ProfileSidebar from "./profilesidebar"
import user from "../../data/calendardata.json"
import feather from 'feather-icons';
import "./profilesidebar.css"
import NotificationDropdown from './notificationdropdown';
const Topbar = () => {
    const [showProfileSidebar, setShowProfileSidebar] = useState(false);

const [theme, setTheme] = useState(() => {
  const saved = localStorage.getItem('__CONFIG__');
  return saved ? JSON.parse(saved).theme : 'light';
});

const toggleTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  localStorage.setItem('__CONFIG__', JSON.stringify({ theme: newTheme }));
};

// Re-render feather icons on theme change
useEffect(() => {
  feather.replace();
}, [theme]);

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
    // const [theme, setTheme] = useState(() => {
    //     const saved = localStorage.getItem("__CONFIG__");
    //     return saved ? JSON.parse(saved).theme : "light";
    // });

    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);
        localStorage.setItem("__CONFIG__", JSON.stringify({ theme }));
    }, [theme]);

    // useEffect(() => {
    //     if (window.feather) {
    //         window.feather.replace();
    //     }
    // }, []);

    // const toggleTheme = () => {
    //     setTheme(prev => (prev === "light" ? "dark" : "light"));
    // }

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

    return <>
    <div className="topbar-custom shadow-sm">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">

          {/* Left side */}
          <ul className="list-unstyled topnav-menu mb-0 d-flex align-items-center gap-3">
            <li>
              <button className="button-toggle-menu nav-link" onClick={toggleSidebar}>
                <i data-feather="menu" className="noti-icon"></i>
              </button>
            </li>

            <li className="d-none d-lg-block">
              <h5 className="mb-0 fw-semibold">Welcome back, Sameer 👋</h5>
            </li>

            <li className="d-none d-md-block">
              <form className="app-search me-auto">
                <div className="position-relative topbar-search">
                  <input type="text" className="form-control ms-1 ps-5" placeholder="Search..." />
                  <i data-feather="search" className="fs-5 position-absolute text-muted top-50 translate-middle-y ms-3"></i>
                </div>
              </form>
            </li>
          </ul>

          {/* Right side */}
          <ul className="list-unstyled topnav-menu mb-0 d-flex align-items-center gap-3">

            <li className="d-none d-sm-flex">
              <button type="button" className="btn nav-link" onClick={toggleFullscreen}>
                <i data-feather="maximize" className="align-middle fullscreen noti-icon"></i>
              </button>
            </li>

            <li className="d-none d-sm-flex">
            <button type="button" className="btn nav-link" onClick={toggleTheme}>
      <i data-feather={theme === 'light' ? 'moon' : 'sun'} className="align-middle"></i>
    </button>
  

            </li>

            {/* Notifications */}

  <NotificationDropdown />



            {/* Profile */}
            <li className="dropdown notification-list topbar-dropdown">
              <a
                className="nav-link nav-user me-0"
                role="button"
                onClick={() => setShowProfileSidebar(true)}
              >
                <img src="/img/users/user-13.jpg" alt="user" className="rounded-circle" />
                <span className="pro-user-name ms-1">Sam</span>
              </a>

              {/* Sidebar Profile */}
              <div className={`profile-sidebar ${showProfileSidebar ? 'open' : ''}`}>
                <ProfileSidebar
                  {...user}
                  onClose={() => setShowProfileSidebar(false)}
                />
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  
    </>
}
export default Topbar