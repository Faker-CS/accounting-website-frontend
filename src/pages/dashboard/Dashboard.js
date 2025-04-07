import React from 'react';

const Dashboard = () => {
  return (
    <div className="row">
      <div className="col-lg-12 mb-4 order-0">
        <div className="card">
          <div className="d-flex align-items-end row">
            <div className="col-sm-7">
              <div className="card-body">
                <h5 className="card-title text-primary">Bienvenue sur Side Care! 🎉</h5>
                <p className="mb-4">
                  Vous avez <span className="fw-bold">80%</span> de vos tâches complétées. Consultez vos entreprises
                  pour gérer vos effectifs.
                </p>

                <a href="/companies" className="btn btn-sm btn-primary">Voir les entreprises</a>
              </div>
            </div>
            <div className="col-sm-5 text-center text-sm-left">
              <div className="card-body pb-0 px-0 px-md-4">
                <img
                  src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/illustrations/man-with-laptop-light.png"
                  height="140"
                  alt="View Badge User"
                  data-app-dark-img="illustrations/man-with-laptop-dark.png"
                  data-app-light-img="illustrations/man-with-laptop-light.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-lg-4 col-md-4 order-1">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-6 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title d-flex align-items-start justify-content-between">
                  <div className="avatar flex-shrink-0">
                    <img
                      src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/chart-success.png"
                      alt="chart success"
                      className="rounded"
                    />
                  </div>
                </div>
                <span className="fw-semibold d-block mb-1">Entreprises</span>
                <h3 className="card-title mb-2">12</h3>
                <small className="text-success fw-semibold"><i className="ti ti-arrow-up-right"></i> +72.80%</small>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-6 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title d-flex align-items-start justify-content-between">
                  <div className="avatar flex-shrink-0">
                    <img
                      src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/wallet-info.png"
                      alt="Credit Card"
                      className="rounded"
                    />
                  </div>
                </div>
                <span className="fw-semibold d-block mb-1">Employés</span>
                <h3 className="card-title mb-2">156</h3>
                <small className="text-success fw-semibold"><i className="ti ti-arrow-up-right"></i> +28.42%</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-12 col-md-8 col-lg-8 order-3 order-md-2">
        <div className="card">
          <div className="card-header d-flex align-items-center justify-content-between">
            <h5 className="card-title m-0 me-2">Activité récente</h5>
          </div>
          <div className="card-body">
            <ul className="p-0 m-0">
              <li className="d-flex mb-4 pb-1">
                <div className="avatar flex-shrink-0 me-3">
                  <img src="https://ui-avatars.com/api/?name=John+Doe&background=random" alt="User" className="rounded" />
                </div>
                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                  <div className="me-2">
                    <h6 className="mb-0">John Doe</h6>
                    <small className="text-muted">A ajouté une nouvelle entreprise</small>
                  </div>
                  <div className="user-progress d-flex align-items-center gap-1">
                    <span className="text-muted">Il y a 1 heure</span>
                  </div>
                </div>
              </li>
              <li className="d-flex mb-4 pb-1">
                <div className="avatar flex-shrink-0 me-3">
                  <img src="https://ui-avatars.com/api/?name=Jane+Smith&background=random" alt="User" className="rounded" />
                </div>
                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                  <div className="me-2">
                    <h6 className="mb-0">Jane Smith</h6>
                    <small className="text-muted">A modifié les informations d'une entreprise</small>
                  </div>
                  <div className="user-progress d-flex align-items-center gap-1">
                    <span className="text-muted">Il y a 3 heures</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;