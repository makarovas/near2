import * as React from 'react'
import { useUser } from 'components/user';
import { Navigate } from 'react-router-dom';

export const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
    const { isSignedIn } = useUser();

    if (!isSignedIn) {
        return <Navigate replace to="/signin" />
    }

    return element;
};