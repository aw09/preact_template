import { useState } from 'preact/hooks';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../../firebaseConfig';

const Auth = () => {
    const [user, setUser] = useState(null);

    const handleGoogleSignIn = async () => {
        const auth = getAuth(app); // Use the app instance from firebaseConfig
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
            console.log(result)

        } catch (error) {
            console.error("Error during Google sign-in:", error);
        }
    };

    return (
        <div>
            {user ? (
                <div>
                    <p>Welcome, {user.displayName}</p>
                </div>
            ) : (
                <button onClick={handleGoogleSignIn}>Sign in with Google</button>
            )}
        </div>
    );
};

export default Auth;