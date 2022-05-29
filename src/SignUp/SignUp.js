import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/googleLogo.png'
import './SignUp.css'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import useToken from '../CustomHooks/useToken';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();
    const [token] = useToken(user);
    if (user) {
        navigate('/');
    }


    const emailRef = useRef('');
    const passwordRef = useRef('');
    const submitForm = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // console.log(email, password, reEnterpassword);
        createUserWithEmailAndPassword(email, password);
    }
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
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
    if (userGoogle) {
        navigate('/');
    }
    return (
        <div className='sign-up'>
            <div>
                <h2 className='text-center text-primary mt-5'>Sign Up</h2>
                <form onSubmit={submitForm} className='w-50 mx-auto'>
                    <div className="mb-3">
                        <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                    </div>
                    <div className="mb-3">
                        <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
                    </div>


                    <button type="submit" className="btn btn-primary ps-5 pe-5 d-block mx-auto">Sign Up</button>
                    <p>Already have an Account? Please <Link to="/logIn">LogIn</Link> </p>

                </form>
                <div className='d-flex w-50 mx-auto '>
                    <div style={{ height: '1px' }} className='w-50 bg-secondary mx-auto mt-3'></div>
                    <p className='mt-1 mx-1'>Or</p>
                    <div style={{ height: '1px' }} className='w-50 bg-secondary mx-auto mt-3'></div>
                </div>
                {errorText}
                <button onClick={() => signInWithGoogle()} className='btn btn-primary d-block mx-auto'>
                    <img style={{ height: '25px', width: '25px' }} className='me-1' src={logo} alt="" />
                    Google SignUp </button>
                {loadingText}

            </div>
        </div>
    );
};

export default SignUp;