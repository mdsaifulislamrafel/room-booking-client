import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut ,GoogleAuthProvider, updateProfile, GithubAuthProvider } from "firebase/auth";
import auth from "../Firebase/firebase.congig";


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const [reload, setReload] = useState(false); 

    const updateprofile = async (name, photo) => {
        try {
            setLoading(true);
            await updateProfile(auth.currentUser, { displayName: name, photoURL: photo });
            setReload(false); 
            setLoading(false);
            return;
            
        } catch (error) {
            setLoading(false); 
            return;
            
        }
    };
    const createUser = (email , password ) => {
         setLoading(true)
        return createUserWithEmailAndPassword (auth,email,password)
    }

    
    
   

    const signIn = (email,password) => {
         setLoading(true)
        return signInWithEmailAndPassword (auth,email,password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth); 
    }
    
    const provider = new GoogleAuthProvider();
     
    const signGoogle = () => {
         
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const gitProvider = new GithubAuthProvider()
    
    const signGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, gitProvider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("User in Auth changed", currentUser)
            setUser(currentUser);
            setLoading(false);
        }); 
        return () => {
            unsubscribe();
        };
    }, [reload]); 

    const authInfo = { 
        user,
        loading,
        createUser, 
        reload,
        logOut, 
        signIn, 
        signGoogle,
        updateprofile, 
        signGithub
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;