import api from "./axios";

const AuthService = {
    register: (userData) => {
      return api.post('/register', userData);
    },
    
    login: (credentials) => {
      return api.post('/login', credentials);
    },
    
    logout: () => {
      return api.post('/logout');
    },
    
    getCurrentUser: () => {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    },
    
    isAuthenticated: () => {
      return !!localStorage.getItem('token');
    }
  };
  
  export default AuthService;