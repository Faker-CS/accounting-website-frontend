import React from 'react';
import CompanyList from '../../components/tables/CompanyList';
import DashboardLayout from '../../components/layout/DashboardLayout';

const CompaniesPage = () => {
  return (
    <DashboardLayout>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Employés /</span> Entreprises
        </h4>
        <CompanyList />
      </div>
    </DashboardLayout>
  );
};

export default CompaniesPage;