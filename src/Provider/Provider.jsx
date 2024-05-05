import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
export const AuthProviderContext = createContext();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();


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
    const twitterLogin = () => {
        return signInWithPopup(auth, twitterProvider)
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
        twitterLogin,
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