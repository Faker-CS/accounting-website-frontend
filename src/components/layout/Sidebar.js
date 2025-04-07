import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
      <div className="app-brand demo">
        <Link to="/" className="app-brand-link">
          <span className="app-brand-logo demo">
            <svg xmlns="http://www.w3.org/2000/svg" width="334" height="334" viewBox="0 0 334 334" fill="none">
              <path d="M307.132 166.635C307.132 244.229 244.229 307.131 166.635 307.131C89.0415 307.131 26.1392 244.229 26.1392 166.635C26.1392 89.041 89.0415 26.1387 166.635 26.1387C244.229 26.1387 307.132 89.041 307.132 166.635Z" fill="#301111"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M333.27 166.635C333.27 258.665 258.665 333.27 166.635 333.27C74.6051 333.27 0 258.665 0 166.635C0 74.6051 74.6051 0 166.635 0C258.665 0 333.27 74.6051 333.27 166.635ZM166.635 307.132C244.229 307.132 307.132 244.229 307.132 166.635C307.132 89.0412 244.229 26.1389 166.635 26.1389C89.0412 26.1389 26.1389 89.0412 26.1389 166.635C26.1389 244.229 89.0412 307.132 166.635 307.132Z" fill="#FF7B44"/>
            </svg>
          </span>
          <span className="app-brand-text demo menu-text fw-bold">Side Care</span>
        </Link>

        <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto">
          <i className="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i>
          <i className="ti ti-x d-block d-xl-none ti-sm align-middle"></i>
        </a>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        <li className="menu-item">
          <Link to="/dashboard" className="menu-link">
            <i className="menu-icon tf-icons ti ti-smart-home"></i>
            <div>Tableau de bord</div>
          </Link>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0)" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons ti ti-users"></i>
            <div>Employés</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <Link to="/companies" className="menu-link">
                <i className="menu-icon tf-icons ri-shopping-cart-2-line"></i>
                <div>Entreprises</div>
              </Link>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0)" className="menu-link">
                <i className="menu-icon tf-icons ri-shopping-cart-2-line"></i>
                <div>Effectifs</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0)" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons ti ti-user-cog"></i>
            <div>Gestion RH</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="javascript:void(0)" className="menu-link">
                <i className="menu-icon tf-icons ri-shopping-cart-2-line"></i>
                <div>Suivi des démarches RH</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0)" className="menu-link">
                <i className="menu-icon tf-icons ri-shopping-cart-2-line"></i>
                <div>Calendrier</div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;