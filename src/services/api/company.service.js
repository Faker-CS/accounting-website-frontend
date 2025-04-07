import api from './axios';

const CompanyService = {
  getAllCompanies: () => {
    return api.get('/companies');
  },
  
  getCompany: (id) => {
    return api.get(`/companies/${id}`);
  },
  
  createCompany: (companyData) => {
    return api.post('/companies', companyData);
  },
  
  updateCompany: (id, companyData) => {
    return api.put(`/companies/${id}`, companyData);
  },
  
  deleteCompany: (id) => {
    return api.delete(`/companies/${id}`);
  }
};

export default CompanyService;