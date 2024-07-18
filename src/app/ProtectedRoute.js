
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component }) => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? component : <Navigate to="/react-youtube/" />;
};

export default ProtectedRoute;
