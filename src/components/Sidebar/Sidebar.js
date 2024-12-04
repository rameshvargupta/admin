import React, { createContext, useState } from 'react'
import './Sidebar.css';
import { Button } from '@mui/material';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";

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
                    <div className={`subMenuWrapper ${activeTab == 1 && subMenu === true ? "showSubMenu" : "hideSubMenu"}`}>
                        <ul className='subMenu'>
                            <li><Link to={'/products'}>Product List</Link></li>
                            <li><Link to={'/product/details'}>Product View</Link></li>
                            <li><Link to={'/product/upload'}>Product Upload</Link></li>
                        </ul>
                    </div>
                </li>
                <li><Link to={'/'}>
                    <Button onClick={() => isOpenSubmenu(2)} className={`w-100 ${activeTab === 2 && subMenu === true ? "active" : ""}`} >
                        <span className='logoIcon'><MdCategory /> </span>
                        Category
                        <span className='arrow'><FaAngleRight />  </span>
                    </Button>
                    <div className={`subMenuWrapper ${activeTab == 2 && subMenu === true ? "showSubMenu" : "hideSubMenu"}`}>
                        <ul className='subMenu'>
                            <li><Link to={'/'}>Category List</Link></li>
                            <li><Link to={'/'}>Add a category</Link></li>
                            <li><Link to={'/'}>Sub Category List</Link></li>
                        </ul>
                    </div>
                </Link>
                </li>
                <li><Link to={'/'}>
                    <Button onClick={() => isOpenSubmenu(3)} className={`w-100 ${activeTab === 3 && subMenu === true ? "active" : ""}`} >
                        <span className='logoIcon'><FaCartArrowDown /> </span>
                        Orders
                        <span className='arrow'><FaAngleRight />  </span>
                    </Button>
                </Link>
                </li>
                <li><Link to={'/'}>
                    <Button onClick={() => isOpenSubmenu(4)} className={`w-100 ${activeTab === 4 && subMenu === true ? "active" : ""}`} >
                        <span className='logoIcon'><MdMessage /> </span>
                        Message
                        <span className='arrow'><FaAngleRight />  </span>
                    </Button>
                </Link>
                </li>

                {/* extra sidebar for testing purpose start*/}
                <li>
                    <Button onClick={() => isOpenSubmenu(1)} className={`w-100 ${activeTab === 1 && subMenu === true ? "active" : ""}`} >
                        <span className='logoIcon'><FaProductHunt /> </span>
                        Product
                        <span className='arrow'><FaAngleRight />  </span>
                    </Button>
                    <div className={`subMenuWrapper ${activeTab == 1 && subMenu === true ? "showSubMenu" : "hideSubMenu"}`}>
                        <ul className='subMenu'>
                            <li><Link to={'/'}>Product List</Link></li>
                            <li><Link to={'/'}>Product View</Link></li>
                            <li><Link to={'/'}>Product Upload</Link></li>
                        </ul>
                    </div>
                </li>
                <li><Link to={'/'}>
                    <Button onClick={() => isOpenSubmenu(2)} className={`w-100 ${activeTab === 2 && subMenu === true ? "active" : ""}`} >
                        <span className='logoIcon'><MdCategory /> </span>
                        Category
                        <span className='arrow'><FaAngleRight />  </span>
                    </Button>
                    <div className={`subMenuWrapper ${activeTab == 2 && subMenu === true ? "showSubMenu" : "hideSubMenu"}`}>
                        <ul className='subMenu'>
                            <li><Link to={'/'}>Category List</Link></li>
                            <li><Link to={'/'}>Add a category</Link></li>
                            <li><Link to={'/'}>Sub Category List</Link></li>
                        </ul>
                    </div>
                </Link>
                </li>
                <li><Link to={'/'}>
                    <Button onClick={() => isOpenSubmenu(3)} className={`w-100 ${activeTab === 3 && subMenu === true ? "active" : ""}`} >
                        <span className='logoIcon'><FaCartArrowDown /> </span>
                        Orders
                        <span className='arrow'><FaAngleRight />  </span>
                    </Button>
                </Link>
                </li>
                <li><Link to={'/'}>
                    <Button onClick={() => isOpenSubmenu(4)} className={`w-100 ${activeTab === 4 && subMenu === true ? "active" : ""}`} >
                        <span className='logoIcon'><MdMessage /> </span>
                        Message
                        <span className='arrow'><FaAngleRight />  </span>
                    </Button>
                </Link>
                </li>

                {/* extra sidebar for testing purpose end*/}

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
