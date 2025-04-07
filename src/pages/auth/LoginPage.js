import React from 'react';
import LoginForm from '../components/forms/LoginForm';

const LoginPage = () => {
  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner py-4">
          <div className="card">
            <div className="card-body">
              <div className="app-brand justify-content-center mb-4 mt-2">
                <span className="app-brand-logo demo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="334" height="334" viewBox="0 0 334 334" fill="none">
                    <path d="M307.132 166.635C307.132 244.229 244.229 307.131 166.635 307.131C89.0415 307.131 26.1392 244.229 26.1392 166.635C26.1392 89.041 89.0415 26.1387 166.635 26.1387C244.229 26.1387 307.132 89.041 307.132 166.635Z" fill="#301111"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M333.27 166.635C333.27 258.665 258.665 333.27 166.635 333.27C74.6051 333.27 0 258.665 0 166.635C0 74.6051 74.6051 0 166.635 0C258.665 0 333.27 74.6051 333.27 166.635ZM166.635 307.132C244.229 307.132 307.132 244.229 307.132 166.635C307.132 89.0412 244.229 26.1389 166.635 26.1389C89.0412 26.1389 26.1389 89.0412 26.1389 166.635C26.1389 244.229 89.0412 307.132 166.635 307.132Z" fill="#FF7B44"/>
                  </svg>
                </span>
                <span className="app-brand-text demo text-body fw-bold ms-1">Side Care</span>
              </div>
              <h4 className="mb-2 text-center">Welcome to Side Care! 👋</h4>
              <p className="mb-4 text-center">Please sign-in to your account</p>
              
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;