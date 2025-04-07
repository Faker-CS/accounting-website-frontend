import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CompanyDetail from '../../components/ui/CompanyDetail';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { fetchCompany } from '../../store/slices/companiesSlice';

const CompanyDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentCompany, loading, error } = useSelector((state) => state.companies);

  useEffect(() => {
    dispatch(fetchCompany(id));
  }, [dispatch, id]);

  return (
    <DashboardLayout>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span className="text-muted fw-light">Employés / Entreprises /</span> Détails
        </h4>
        <CompanyDetail />
      </div>
    </DashboardLayout>
  );
};

export default CompanyDetailPage;