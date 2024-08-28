import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { route } from 'preact-router';
import { auth } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const AuthWrapper = ({ component: Component, ...props }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
                setIsAuthenticated(true);
                route('/', true);
            } else {
                setIsAuthenticated(false);
            }
        });

        return () => unsubscribe();
    }, []);

    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        route('/auth', true);
        return null;
    }

    return <Component {...props} />;
};

export default AuthWrapper;