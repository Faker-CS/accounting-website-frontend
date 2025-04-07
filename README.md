# React Frontend for Laravel API

This project is a React frontend application that consumes a Laravel API backend for company management.

## Environment Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
REACT_APP_API_URL=http://your-laravel-api-url/api
```

Replace `http://your-laravel-api-url/api` with the URL of your Laravel API.

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The application will be available at http://localhost:3000.

## Features

### Authentication

- User registration
- User login
- Protected routes
- JWT token handling
- Auto-logout on token expiration

### Company Management

- List all companies
- View company details
- Create new companies
- Edit existing companies
- Delete companies

### Additional Features

- Toast notifications for success/error messages
- Loading states during API calls
- Responsive design

## Project Structure

```
src/
├── assets/         # Static assets like images, fonts, etc.
├── components/     # Reusable UI components
│   ├── forms/      # Form components
│   ├── layout/     # Layout components
│   ├── tables/     # Table components
│   └── ui/         # UI components
├── hooks/          # Custom React hooks
├── layouts/        # Page layouts
├── pages/          # Page components
│   ├── auth/       # Authentication pages
│   ├── companies/  # Company management pages
│   └── dashboard/  # Dashboard pages
├── services/       # API services
│   └── api/        # API client and endpoints
├── store/          # Redux store
│   ├── middleware/ # Redux middleware
│   └── slices/     # Redux slices
└── utils/          # Utility functions
```

## API Integration

The application uses Axios for API calls with interceptors for error handling. The API client is configured in `src/services/api/axios.js`.

### Authentication API

- POST /api/register - User registration
- POST /api/login - User login
- POST /api/logout - User logout

### Company API

- GET /api/companies - List all companies
- POST /api/companies - Create a company
- GET /api/companies/{id} - Get a single company
- PUT /api/companies/{id} - Update a company
- DELETE /api/companies/{id} - Delete a company

## State Management

The application uses Redux Toolkit for state management with the following slices:

- `auth` - Authentication state
- `companies` - Company management state
- `ui` - UI state (loading, toasts, etc.)

## Form Validation

Form validation is implemented using Formik and Yup, matching the Laravel validation rules:

- 'raison_sociale' => 'required'
- 'numero_siret' => 'required|string|max:14'
- etc.

## Building for Production

To build the application for production, run:

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.