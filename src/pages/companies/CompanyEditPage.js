import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CompanyForm from '../../components/forms/CompanyForm';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { fetchCompany } from '../../store/slices/companiesSlice';

const CompanyEditPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentCompany, loading, error } = useSelector((state) => state.companies);

  useEffect(() => {
    dispatch(fetchCompany(id));
  }, [dispatch, id]);

  if (loading && !currentCompany) {
    return (
      <DashboardLayout>
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (error && !currentCompany) {
    return (
      <DashboardLayout>
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Employés / Entreprises /</span> Modifier
        </h4>
        {currentCompany && <CompanyForm company={currentCompany} isEdit={true} />}
      </div>
    </DashboardLayout>
  );
};

export default CompanyEditPage;