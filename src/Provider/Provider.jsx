import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
export const AuthProviderContext = createContext();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();


const Provider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = ( email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    const loginWithGoogle = () => {
        // signInWithPopup(auth, provider)
        setLoading(true) ;
        return signInWithPopup(auth, googleProvider)
    }
    const facebookLogin = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    // authorize here
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
          });
          return () => {
            return unsubscribe() ;
          }
    },[])

    const info = {
        loading,
        createUser,
        login,
        loginWithGoogle,
        facebookLogin,
        logOut,
        user,
    };

    return (
        <AuthProviderContext.Provider value={info} >
            {children}
        </AuthProviderContext.Provider>
    );
};

export default Provider;