import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config.js';
import { UserContext } from '../../App';
import { useHistory, useLocation, Link } from 'react-router-dom';
import './Login.css';
import Logo from '../../../src/images/logos/logo.png';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    return (
        <div className="login">
            <div className="container">
                <div className="logo-container text-center p-4">
                    <Link to="/">
                        <img className="logo2"  src={Logo} alt="logo_pogo" />
                    </Link>
                </div>
                <div className="text-center btn-container">
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn btn-block signInBtn" >
                        Continue With Google
                     </button>
                    <p className="mt-3">
                        Don't have an account?{' '}
                        <span>
                            <Link to="/">Create an account</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;