import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createCompany, updateCompany } from '../../store/slices/companiesSlice';
import { useNavigate } from 'react-router-dom';

const CompanyForm = ({ company = null, isEdit = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.companies);

  // Validation schema based on Laravel rules
  const validationSchema = Yup.object({
    raison_sociale: Yup.string()
      .required('Raison sociale is required'),
    numero_siret: Yup.string()
      .required('SIRET number is required')
      .max(14, 'SIRET number must be at most 14 characters'),
    forme_juridique: Yup.string()
      .required('Legal form is required'),
    date_creation: Yup.date()
      .required('Creation date is required'),
    adresse: Yup.string()
      .required('Address is required'),
    code_postal: Yup.string()
      .required('Postal code is required'),
    ville: Yup.string()
      .required('City is required'),
    numero_tva: Yup.string()
      .nullable(),
    telephone: Yup.string()
      .nullable(),
    email: Yup.string()
      .email('Invalid email format')
      .nullable(),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      raison_sociale: company?.raison_sociale || '',
      numero_siret: company?.numero_siret || '',
      forme_juridique: company?.forme_juridique || '',
      date_creation: company?.date_creation || '',
      adresse: company?.adresse || '',
      code_postal: company?.code_postal || '',
      ville: company?.ville || '',
      numero_tva: company?.numero_tva || '',
      telephone: company?.telephone || '',
      email: company?.email || '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        if (isEdit) {
          await dispatch(updateCompany({ id: company.id, companyData: values })).unwrap();
        } else {
          await dispatch(createCompany(values)).unwrap();
        }
        navigate('/companies');
      } catch (error) {
        // Error is handled by the thunk and displayed via toast
      }
    },
  });

  return (
    <div className="card mb-4">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">{isEdit ? 'Edit Company' : 'Add New Company'}</h5>
      </div>
      <div className="card-body">
        <form onSubmit={formik.handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="raison_sociale" className="form-label">Raison Sociale *</label>
              <input
                type="text"
                id="raison_sociale"
                name="raison_sociale"
                className={`form-control ${formik.touched.raison_sociale && formik.errors.raison_sociale ? 'is-invalid' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.raison_sociale}
              />
              {formik.touched.raison_sociale && formik.errors.raison_sociale && (
                <div className="invalid-feedback">{formik.errors.raison_sociale}</div>
              )}
            </div>
            
            <div className="col-md-6">
              <label htmlFor="forme_juridique" className="form-label">Forme Juridique *</label>
              <select
                id="forme_juridique"
                name="forme_juridique"
                className={`form-select ${formik.touched.forme_juridique && formik.errors.forme_juridique ? 'is-invalid' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.forme_juridique}
              >
                <option value="">Select legal form</option>
                <option value="SARL">SARL</option>
                <option value="SAS">SAS</option>
                <option value="SA">SA</option>
                <option value="EURL">EURL</option>
                <option value="EI">EI</option>
                <option value="SASU">SASU</option>
                <option value="SCI">SCI</option>
                <option value="SCOP">SCOP</option>
              </select>
              {formik.touched.forme_juridique && formik.errors.forme_juridique && (
                <div className="invalid-feedback">{formik.errors.forme_juridique}</div>
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="numero_siret" className="form-label">Numéro SIRET *</label>
              <input
                type="text"
                id="numero_siret"
                name="numero_siret"
                className={`form-control ${formik.touched.numero_siret && formik.errors.numero_siret ? 'is-invalid' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.numero_siret}
                maxLength={14}
              />
              {formik.touched.numero_siret && formik.errors.numero_siret && (
                <div className="invalid-feedback">{formik.errors.numero_siret}</div>
              )}
            </div>
            
            <div className="col-md-6">
              <label htmlFor="date_creation" className="form-label">Date de Création *</label>
              <input
                type="date"
                id="date_creation"
                name="date_creation"
                className={`form-control ${formik.touched.date_creation && formik.errors.date_creation ? 'is-invalid' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.date_creation}
              />
              {formik.touched.date_creation && formik.errors.date_creation && (
                <div className="invalid-feedback">{formik.errors.date_creation}</div>
              )}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="adresse" className="form-label">Adresse *</label>
            <input
              type="text"
              id="adresse"
              name="adresse"
              className={`form-control ${formik.touched.adresse && formik.errors.adresse ? 'is-invalid' : ''}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.adresse}
            />
            {formik.touched.adresse && formik.errors.adresse && (
              <div className="invalid-feedback">{formik.errors.adresse}</div>
            )}
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="code_postal" className="form-label">Code Postal *</label>
              <input
                type="text"
                id="code_postal"
                name="code_postal"
                className={`form-control ${formik.touched.code_postal && formik.errors.code_postal ? 'is-invalid' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.code_postal}
              />
              {formik.touched.code_postal && formik.errors.code_postal && (
                <div className="invalid-feedback">{formik.errors.code_postal}</div>
              )}
            </div>
            
            <div className="col-md-6">
              <label htmlFor="ville" className="form-label">Ville *</label>
              <input
                type="text"
                id="ville"
                name="ville"
                className={`form-control ${formik.touched.ville && formik.errors.ville ? 'is-invalid' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ville}
              />
              {formik.touched.ville && formik.errors.ville && (
                <div className="invalid-feedback">{formik.errors.ville}</div>
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="numero_tva" className="form-label">Numéro TVA</label>
              <input
                type="text"
                id="numero_tva"
                name="numero_tva"
                className={`form-control ${formik.touched.numero_tva && formik.errors.numero_tva ? 'is-invalid' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.numero_tva}
              />
              {formik.touched.numero_tva && formik.errors.numero_tva && (
                <div className="invalid-feedback">{formik.errors.numero_tva}</div>
              )}
            </div>
            
            <div className="col-md-4">
              <label htmlFor="telephone" className="form-label">Téléphone</label>
              <input
                type="text"
                id="telephone"
                name="telephone"
                className={`form-control ${formik.touched.telephone && formik.errors.telephone ? 'is-invalid' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.telephone}
              />
              {formik.touched.telephone && formik.errors.telephone && (
                <div className="invalid-feedback">{formik.errors.telephone}</div>
              )}
            </div>
            
            <div className="col-md-4">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="invalid-feedback">{formik.errors.email}</div>
              )}
            </div>
          </div>

          <div className="mt-4">
            <button type="submit" className="btn btn-primary me-2" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                  {isEdit ? 'Updating...' : 'Saving...'}
                </>
              ) : (
                isEdit ? 'Update Company' : 'Create Company'
              )}
            </button>
            <button 
              type="button" 
              className="btn btn-outline-secondary" 
              onClick={() => navigate('/companies')}
              disabled={loading}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyForm;