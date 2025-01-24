import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);
  const location = useLocation();
  

  if (loading)
    return (
      <div className="min-h-full flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  if (currentUser) return children;
  return <Navigate to="/login" state={location?.pathname}></Navigate>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
