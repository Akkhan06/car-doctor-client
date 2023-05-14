import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, lodding} = useContext(AuthContext)
    const location = useLocation()
    if (lodding) {
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' replace state={{from: location}}></Navigate>;
};

export default PrivateRoutes;