import React, { createContext, useState } from 'react'
import './Sidebar.css';
import { Button } from '@mui/material';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { MdLogin } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";




export const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [subMenu, setSubMenu] = useState(false);

    const isOpenSubmenu = (index) => {
        setActiveTab(index);
        setSubMenu(!subMenu);
    };

    return (
        <div className='sidebar'>
            <ul>
                <li><Link to={'/'}>
                    <Button onClick={() => setActiveTab(0)} className={`w-100 ${activeTab === 0 ? "active" : ""}`} >
                        <span className='logoIcon'><MdDashboard /> </span>
                        Dashbord
                        <span className='arrow'><FaAngleRight />  </span>
                    </Button>
                </Link>
                </li>

                <li>
                    <Button onClick={() => isOpenSubmenu(1)} className={`w-100 ${activeTab === 1 && subMenu === true ? "active" : ""}`} >
                        <span className='logoIcon'><FaProductHunt /> </span>
                        Product
                        <span className='arrow'><FaAngleRight />  </span>
                    </Button>

                    <div className={`subMenuWrapper ${activeTab === 1 && subMenu === true ? "showSubMenu" : "hideSubMenu"}`}>
                        <ul className='subMenu'>
                            <li className='testerLink'><Link to={'/products'}>Product List</Link></li>
                            <li><Link to={'/product/details'}>Product View</Link></li>
                            <li><Link to={'/product/upload'}>Product Upload</Link></li>
                        </ul>
                    </div>
                </li>

                <li>
                    <Button onClick={() => isOpenSubmenu(2)} className={`w-100 ${activeTab === 2 && subMenu === true ? "active" : ""}`} >
                        <span className='logoIcon'><MdCategory /> </span>
                        Category
                        <span className='arrow'><FaAngleRight />  </span>
                    </Button>

                    <div className={`subMenuWrapper ${activeTab === 2 && subMenu === true ? "showSubMenu" : "hideSubMenu"}`}>
                        <ul className='subMenu'>
                            <li><Link to={'/category'}>Category List</Link></li>
                            <li><Link to={'/category/add'}>Add a category</Link></li>
                            <li><Link to={'/'}>Sub Category List</Link></li>
                        </ul>
                    </div>
                </li>
       
                <li><Link to={'/'}>
                    <Button onClick={() => isOpenSubmenu(3)} className={`w-100 ${activeTab === 3 && subMenu === true ? "active" : ""}`} >
                        <span className='logoIcon'><FaCartArrowDown /> </span>
                        Orders
                    </Button>
                </Link>
                </li>

                <li><Link to={'/'}>
                    <Button onClick={() => isOpenSubmenu(4)} className={`w-100 ${activeTab === 4 && subMenu === true ? "active" : ""}`} >
                        <span className='logoIcon'><FaBell /> </span>
                        Notification
                    </Button>
                </Link>
                </li>

                <li><Link to={'/'}>
                    <Button onClick={() => isOpenSubmenu(5)} className={`w-100 ${activeTab === 5 && subMenu === true ? "active" : ""}`} >
                        <span className='logoIcon'><IoSettings /> </span>
                        Settings
                    </Button>
                </Link>
                </li>

                <li><Link to={'/login'}>
                    <Button onClick={() => isOpenSubmenu(6)} className={`w-100 ${activeTab === 6 && subMenu === true ? "active" : ""}`} >
                        <span className='logoIcon'><MdLogin /> </span>
                        Login
                    </Button>
                </Link>
                </li>
                <li><Link to={'/signUp'}>
                    <Button onClick={() => isOpenSubmenu(7)} className={`w-100 ${activeTab === 7 && subMenu === true ? "active" : ""}`} >
                        <span className='logoIcon'><RiLogoutCircleLine /> </span>
                        SignUp
                    </Button>
                </Link>
                </li>


            </ul>
            <br />
            <div className='logOutWrapper'>
                <div className='logOutBox'>
                    <Button variant='contained'> <IoMdLogOut /> LogOut</Button>
                </div>
            </div>
        </div>
    )
}
