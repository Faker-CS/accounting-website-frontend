import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCompanies, deleteCompany } from '../../store/slices/companiesSlice';
import { toast } from 'react-toastify';

const CompanyList = () => {
  const dispatch = useDispatch();
  const { companies, loading, error } = useSelector((state) => state.companies);

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this company?')) {
      try {
        await dispatch(deleteCompany(id)).unwrap();
      } catch (error) {
        toast.error(error || 'Failed to delete company');
      }
    }
  };

  if (loading && companies.length === 0) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error && companies.length === 0) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Companies</h5>
        <Link to="/companies/create" className="btn btn-primary">
          <i className="ti ti-plus me-1"></i> Add New Company
        </Link>
      </div>
      <div className="table-responsive text-nowrap">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Raison Sociale</th>
              <th>SIRET</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-border-bottom-0">
            {companies.length > 0 ? (
              companies.map((company) => (
                <tr key={company.id}>
                  <td>{company.id}</td>
                  <td>{company.raison_sociale}</td>
                  <td>{company.numero_siret}</td>
                  <td>{company.adresse}</td>
                  <td>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn p-0 dropdown-toggle hide-arrow"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-dots-vertical"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link to={`/companies/${company.id}`} className="dropdown-item">
                          <i className="ti ti-eye me-1"></i> View
                        </Link>
                        <Link to={`/companies/edit/${company.id}`} className="dropdown-item">
                          <i className="ti ti-pencil me-1"></i> Edit
                        </Link>
                        <button
                          className="dropdown-item"
                          onClick={() => handleDelete(company.id)}
                        >
                          <i className="ti ti-trash me-1"></i> Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No companies found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyList;