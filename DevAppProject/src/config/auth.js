import React, { createContext, useState, useContext } from 'react';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import config from '../config/index';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const {auth} = config;
    const [user, setUser] = useState(null);
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const login = async(email, password) => {
        
        try {
            const authentication = await signInWithEmailAndPassword(email, password);
            if (authentication) {
                // TODO: buscar no firestore o usuario e passar as informações
                console.log('usuario logado:', authentication.user);
                setUser(authentication.user);
                return true;
            }
            else {
                console.error('Usuário / Senha incorretos!');
            }
        } catch (error) {
            console.error('Erro ao fazer o login', error);
        }
        return false;
    };

    const logout = () => {
        // Here you can make an API call to log out the user
        // If the logout is successful, set the user state to null
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
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
