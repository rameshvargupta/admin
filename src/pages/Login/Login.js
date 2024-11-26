
import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import mainLogo from '../../assets/images/dashbord logo.png';
import { MyContext } from '../../App';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import googleImg from '../../assets/images/googleIcon.png'


export const Login = () => {
    const context = useContext(MyContext);
    const [showHidePassword, setShowHidePassword] = useState(false);

    useEffect(() => {
        if (context && context.setisHideHeaderandSidebar) {
            context.setisHideHeaderandSidebar(true);
        }
    }, [context]);

    return (
        <section className="loginSection">
            <div className="loginBox text-center">

                <div className="logoSign">
                    <img src={mainLogo} width={"50px"} alt="Dashboard Logo" />
                    <h5>Sign In Page</h5>
                </div>

                <div className="wrapperSection border p-4">
                    <form>
                        <div className="form-group position-relative">
                            <span className="formIcon">
                                <MdEmail />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your email address"
                                autoFocus
                            />
                        </div>

                        <div className="form-group position-relative">
                            <span className="formIcon">
                                <RiLockPasswordFill />
                            </span>
                            <input
                                type={showHidePassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Enter your password"
                            />
                            <span
                                className="eyeIcon"
                                onClick={() => setShowHidePassword(!showHidePassword)}
                            >
                                {showHidePassword ? <IoEye /> : <FaEyeSlash />}
                            </span>
                        </div>


                        <div className='form-group'>
                            <Button className='btn-blue w-100'>Sign In</Button>
                        </div>

                        <div className='form-group'>
                            <Link to={'/forgotPassword'} className='forgotPassword'>Forgot Password</Link>
                            <div className='d-flex align-items-center justify-content-center or mt-3 mb-3'>
                                <span className='line'></span>
                                <span className='txtOr'>Or</span>
                                <span className='line'></span>
                            </div>



                            <Button variant='outlined' className='w-100 SignGoogle'><img src={googleImg} width={"40px"} /> Sign in with Google</Button>


                        </div>
                    </form>
                </div>

                <div className="wrapperSection border p-2 footerLoginSection">
                    <span className='text-center'>
                        don't have an account?
                        <Link to={'/signUp'} className='linkColor'> Register</Link>
                    </span>
                </div>

            </div>
        </section>
    );
};
