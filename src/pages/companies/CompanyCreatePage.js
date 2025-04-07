import React from 'react';
import CompanyForm from '../../components/forms/CompanyForm';
import DashboardLayout from '../../components/layout/DashboardLayout';

const CompanyCreatePage = () => {
  return (
    <DashboardLayout>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Employés / Entreprises /</span> Ajouter
        </h4>
        <CompanyForm />
      </div>
    </DashboardLayout>
  );
};

export default CompanyCreatePage;