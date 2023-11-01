import React, { createContext, useState, useContext } from 'react';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { where, collection, query, getDocs } from "firebase/firestore";
import { getDownloadURL, ref, getStorage} from "firebase/storage";

import config from '../config/index';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const {auth} = config;
    const [user, setUser] = useState(null);
    const [photoURL, setPhotoURL] = useState(null);

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const login = async(email, password) => {
        
        try {
            const authentication = await signInWithEmailAndPassword(email, password);
            if (authentication) {
                const q = query(collection(config.db, 'users'), where('uid', '==', authentication.user.uid));
                const querySnapshot = await getDocs(q);

                if(querySnapshot.size > 0) {

                    // set user data
                    const user_data = querySnapshot.docs[0].data();
                    user_data['docId'] = querySnapshot.docs[0].ref.id;
                    user_data['userCredential'] = authentication;
                    console.log('user data:', user_data);
                    setUser(user_data);

                    // set photo url
                    const url = await getDownloadURL(ref(getStorage(), `profilePhotos/${user_data.email}`))
                    console.log('user photo url:', url);
                    setPhotoURL(url);
                    
                    return true;
                }else {
                    console.log('Usuário não encontrado!');
                }
            }
            else {
                console.error('Usuário / Senha incorretos!');
            }
        } catch (error) {
            console.error('Erro ao fazer o login', error);
        }
    };

    const logout = () => {
        // Here you can make an API call to log out the user
        // If the logout is successful, set the user state to null
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, photoURL, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
};

export default AuthContext;
