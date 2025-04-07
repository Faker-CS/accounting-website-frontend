import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../../store/slices/uiSlice';

const ResponsiveSidebar = ({ children }) => {
  const dispatch = useDispatch();
  const { sidebarCollapsed } = useSelector((state) => state.ui);
  
  const handleToggle = () => {
    dispatch(toggleSidebar());
  };
  
  return (
    <div className={`layout-wrapper layout-content-navbar ${sidebarCollapsed ? 'layout-menu-collapsed' : ''}`}>
      <div className="layout-container">
        {/* Sidebar */}
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
          <div className="app-brand demo">
            <a href="/" className="app-brand-link">
              <span className="app-brand-logo demo">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 334 334" fill="none">
                  <path d="M307.132 166.635C307.132 244.229 244.229 307.131 166.635 307.131C89.0415 307.131 26.1392 244.229 26.1392 166.635C26.1392 89.041 89.0415 26.1387 166.635 26.1387C244.229 26.1387 307.132 89.041 307.132 166.635Z" fill="#301111"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M333.27 166.635C333.27 258.665 258.665 333.27 166.635 333.27C74.6051 333.27 0 258.665 0 166.635C0 74.6051 74.6051 0 166.635 0C258.665 0 333.27 74.6051 333.27 166.635ZM166.635 307.132C244.229 307.132 307.132 244.229 307.132 166.635C307.132 89.0412 244.229 26.1389 166.635 26.1389C89.0412 26.1389 26.1389 89.0412 26.1389 166.635C26.1389 244.229 89.0412 307.132 166.635 307.132Z" fill="#FF7B44"/>
                </svg>
              </span>
              <span className="app-brand-text demo menu-text fw-bold ms-2">Side Care</span>
            </a>

            <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto" onClick={handleToggle}>
              <i className="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i>
              <i className="ti ti-x d-block d-xl-none ti-sm align-middle"></i>
            </a>
          </div>

          <div className="menu-inner-shadow"></div>

          {children}
        </aside>
        {/* / Sidebar */}
      </div>
    </div>
  );
};

export default ResponsiveSidebar;