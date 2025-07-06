import React, { useState, useEffect, useRef } from 'react';
import feather from 'feather-icons';
import './notficationdropdown.css'; // Assuming you have some styles for the dropdown

const notifications = [
  {
    id: 1,
    user: 'Ralph Edwards',
    time: '5 min ago',
    message: 'Completed Improve workflow in React',
    avatar: '/assets/images/users/user-5.jpg',
  },
  {
    id: 2,
    user: 'Jacob Jones',
    time: '7 min ago',
    message: "@Patryk Please make sure that you're...",
    avatar: '/assets/images/users/user-6.jpg',
  },
];

const NotificationDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    feather.replace();
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <li className="notification-list topbar-dropdown position-relative" ref={dropdownRef}>
      <button className="nav-link btn position-relative" onClick={() => setOpen(!open)}>
        <i data-feather="bell" className="noti-icon" />
        <span className="badge bg-danger rounded-circle noti-icon-badge position-absolute top-0 end-0">
          {notifications.length}
        </span>
      </button>

      {open && (
        <div className="dropdown-menu dropdown-menu-end p-3 rounded shadow-sm show" style={{ minWidth: '300px', zIndex: 1050 }}>
          <div className="dropdown-header d-flex justify-content-between align-items-center mb-2">
            <h6 className="mb-0 fw-semibold">Notifications</h6>
            <button className="btn btn-sm text-primary">Clear All</button>
          </div>
          <div style={{ maxHeight: '250px', overflowY: 'auto' }}>
            {notifications.map(({ id, user, time, message, avatar }) => (
              <div key={id} className="dropdown-item d-flex gap-3 border-bottom py-2">
                <img src={avatar} alt={user} className="rounded-circle" width={40} height={40} />
                <div>
                  <strong className="text-dark">{user}</strong>
                  <p className="mb-0 text-muted small">{message}</p>
                  <small className="text-muted">{time}</small>
                </div>
              </div>
            ))}
          </div>
          <div className="dropdown-item text-center mt-2">
            <a href="#" className="text-primary text-decoration-none">View all</a>
          </div>
        </div>
      )}
    </li>
  );
};

export default NotificationDropdown;