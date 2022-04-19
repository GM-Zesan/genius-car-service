import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user] = useAuthState(auth);
    const location = useLocation();

    const [sendEmailVerification, sending, error] =
        useSendEmailVerification(auth);

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return (
            <div className="text-center">
                <h2 className="text-danger">Your e-mail is not varifyed</h2>
                <h5 className="text-success">Please varify your e-mail</h5>
                <button className='btn btn-primary'
                    onClick={async () => {
                        await sendEmailVerification();
                        alert("Sent email");
                    }}
                >
                    Verify email
                </button>
            </div>
        );
    }



    return children;
};

export default RequireAuth;