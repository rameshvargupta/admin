import React, { useContext, useEffect, useState } from 'react';
import './SignUp.css';
import mainLogo from '../../assets/images/dashbord logo.png';
import { MyContext } from '../../App';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import googleImg from '../../assets/images/googleIcon.png'
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";




export const SignUp = () => {
    const context = useContext(MyContext);
    const [showHidePassword, setShowHidePassword] = useState(false);

    useEffect(() => {
        if (context && context.setisHideHeaderandSidebar) {
            context.setisHideHeaderandSidebar(true);
        }
        window.scroll(0,0)
    }, [context]);

    return (
        <div className='row container-fluid signUp'>
            <div className='col-7'>
                <div className='signupContent'>
                    <div>
                        <h2 className='hd'>
                            BEST UX/UI FASHION <span className='linkColor'>ECOMMERCE DASHBOARD</span> & ADMIN PANEL
                        </h2>
                        <p className='details'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                        </p>
                        <Link to={'/'}> <Button className='btn-blue'>
                            <span className='homeIcon'> <IoHomeSharp /></span>  Go To Home
                        </Button>
                        </Link>
                    </div>

                </div>
            </div>

            <div className='col-5'>
                <section className="loginSection">
                    <div className="loginBox text-center">

                        <div className="logoSign">
                            <img src={mainLogo} width={"50px"} alt="Dashboard Logo" />
                            <h5>Sign Up Page</h5>
                        </div>

                        <div className="wrapperSection border p-4">
                            <form>

                                <div className="form-group position-relative">
                                    <span className="formIcon">
                                        <FaUser />
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your name"
                                        autoFocus
                                    />
                                </div>

                                <div className="form-group position-relative">
                                    <span className="formIcon">
                                        <MdEmail />
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your email address"
                                    />
                                </div>

                                <div className="form-group position-relative">
                                    <span className="formIcon">
                                        <FaPhoneAlt />
                                    </span>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter your phone number"
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

                                </div>

                                <div className="form-group position-relative">
                                    <span className="formIcon">
                                        <RiLockPasswordFill />
                                    </span>
                                    <input
                                        type={showHidePassword ? "text" : "password"}
                                        className="form-control"
                                        placeholder="Confirm your password"
                                    />
                                    <span
                                        className="eyeIcon"
                                        onClick={() => setShowHidePassword(!showHidePassword)}
                                    >
                                        {showHidePassword ? <IoEye /> : <FaEyeSlash />}
                                    </span>
                                </div>

                                <div className='form-group'>
                                    <Button className='btn-blue w-100'>Sign Up</Button>
                                </div>

                                <div className='form-group'>
                                    <Button variant='outlined' className='w-100 SignGoogle'><img src={googleImg} width={"40px"} /> Sign in with Google</Button>
                                </div>
                            </form>
                        </div>

                        <div className="wrapperSection border p-2 footerLoginSection">
                            <span className='text-center'>
                                have an account?
                                <Link to={'/login'} className='linkColor'> Login</Link>
                            </span>
                        </div>

                    </div>
                </section>
            </div>
        </div>

    );
}
