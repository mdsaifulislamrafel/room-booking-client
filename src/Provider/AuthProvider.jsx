/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider, updateProfile, GithubAuthProvider } from "firebase/auth";
import auth from "../Firebase/firebase.congig";
import axios from 'axios';


export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

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
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }





    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
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
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }
            setUser(currentUser)
            setLoading(false);

            if (currentUser) {
                axios.post('http://localhost:5000/jwt', loggedUser, {
                    withCredentials: true
                })
                    // .then(res => {
                    //     console.log("token response", res.data);
                    // })
            }
            else {
                axios.post('http://localhost:5000/logout', loggedUser, {
                    withCredentials: true
                })
                    // .then(res => {
                    //     console.log("logout response", res.data);
                    // })
            }

        })
        return () => {
            unSubscribe();
        }
    }, [user?.email])

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