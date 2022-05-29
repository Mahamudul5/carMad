import React, { useRef } from 'react';
import { } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate, } from 'react-router-dom';
import auth from '../firebase.init';
import logo from '../images/googleLogo.png'
import './LogIn.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../CustomHooks/useToken';


const LogIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();




    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [token] = useToken(user || userGoogle);
    if (token) {
        navigate('/');
    }
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const handleReSetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email sent .Please Check.');
        }


        else {
            toast('Please Enter valid Email.');
        }
    }
    const submitForm = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    let errorText;
    if (error || errorGoogle) {

        errorText = <div>
            <p className='text-danger text-center'>Error:{error?.message} {errorGoogle?.message}</p>
        </div>

    }
    let loadingText;
    if (loading || loadingGoogle) {
        loadingText = <p className='text-center'>Loading...</p>;
    }


    return (
        <div className='log-in'>
            <h2 className='text-center text-primary mt-5'>logIn</h2>
            <form onSubmit={submitForm} className='w-50 mx-auto'>
                <div className="mb-3">
                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder='Email' />
                </div>
                <div className="mb-3">
                    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" required placeholder='Password' />
                </div>

                <button type="submit" className="btn btn-primary ps-5 pe-5 d-block mx-auto">LogIn</button>
                <p>don't have Account? Please <Link className='text-decoration-none' to="/signUp">signUp</Link> </p>
                <p>Forgot Password ?<button className='btn btn-link text-decoration-none' onClick={handleReSetPassword}>Reset password </button></p>

            </form>
            <div className='d-flex w-50 mx-auto '>
                <div style={{ height: '1px' }} className='w-50 bg-secondary mx-auto mt-3'></div>
                <p className='mt-1 mx-1'>Or</p>
                <div style={{ height: '1px' }} className='w-50 bg-secondary mx-auto mt-3'></div>
            </div>
            {errorText}
            <button onClick={() => signInWithGoogle()} className='btn btn-primary d-block mx-auto'>
                <img style={{ height: '25px', width: '25px' }} className='me-1' src={logo} alt="" />
                Google SingIN</button>
            {loadingText}
            <ToastContainer />
        </div>
    );
};

export default LogIn;