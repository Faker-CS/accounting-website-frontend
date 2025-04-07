import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompany, clearCurrentCompany } from '../../store/slices/companiesSlice';

const CompanyDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentCompany, loading, error } = useSelector((state) => state.companies);

  useEffect(() => {
    dispatch(fetchCompany(id));

    // Cleanup function
    return () => {
      dispatch(clearCurrentCompany());
    };
  }, [dispatch, id]);

  if (loading && !currentCompany) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error && !currentCompany) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  if (!currentCompany) {
    return (
      <div className="alert alert-warning" role="alert">
        Company not found
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Company Details</h5>
        <div>
          <button 
            className="btn btn-primary me-2"
            onClick={() => navigate(`/companies/edit/${id}`)}
          >
            <i className="ti ti-pencil me-1"></i> Edit
          </button>
          <button 
            className="btn btn-outline-secondary"
            onClick={() => navigate('/companies')}
          >
            <i className="ti ti-arrow-left me-1"></i> Back
          </button>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h6 className="fw-semibold">Raison Sociale</h6>
            <p>{currentCompany.raison_sociale}</p>
          </div>
          <div className="col-md-6 mb-3">
            <h6 className="fw-semibold">Forme Juridique</h6>
            <p>{currentCompany.forme_juridique}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <h6 className="fw-semibold">Numéro SIRET</h6>
            <p>{currentCompany.numero_siret}</p>
          </div>
          <div className="col-md-6 mb-3">
            <h6 className="fw-semibold">Date de Création</h6>
            <p>{new Date(currentCompany.date_creation).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="mb-3">
          <h6 className="fw-semibold">Adresse</h6>
          <p>{currentCompany.adresse}</p>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <h6 className="fw-semibold">Code Postal</h6>
            <p>{currentCompany.code_postal}</p>
          </div>
          <div className="col-md-6 mb-3">
            <h6 className="fw-semibold">Ville</h6>
            <p>{currentCompany.ville}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <h6 className="fw-semibold">Numéro TVA</h6>
            <p>{currentCompany.numero_tva || 'N/A'}</p>
          </div>
          <div className="col-md-4 mb-3">
            <h6 className="fw-semibold">Téléphone</h6>
            <p>{currentCompany.telephone || 'N/A'}</p>
          </div>
          <div className="col-md-4 mb-3">
            <h6 className="fw-semibold">Email</h6>
            <p>{currentCompany.email || 'N/A'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;