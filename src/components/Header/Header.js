import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/images/dashbord logo.png';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Button } from '@mui/material';
import SearchBox from '../../assets/images/SearchBox/SearchBox';
import LightModeIcon from '@mui/icons-material/LightMode';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import userlogo from '../../assets/images/user.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';

export const Header = () => {

    const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);
    const [notificationAnchorEl, setNotificationAnchorEl] = React.useState(null);

    const profileOpen = Boolean(profileAnchorEl);
    const notificationOpen = Boolean(notificationAnchorEl);

    // Handlers for profile menu
    const handleOpenProfile = (event) => {
        setProfileAnchorEl(event.currentTarget);
    };
    const handleCloseProfile = () => {
        setProfileAnchorEl(null);
    };

    // Handlers for notification menu
    const handleOpenNotifications = (event) => {
        setNotificationAnchorEl(event.currentTarget);
    };
    const handleCloseNotifications = () => {
        setNotificationAnchorEl(null);
    };

    return (
        <header className='d-flex align-items-center'>
            <div className='container-fluid'>
                <div className='row d-flex align-items-center'>
                    <div className='col-sm-2 part1'>
                        <Link to={'/'} className='logo d-flex align-items-center'>
                            <img src={mainLogo} className='w-100' alt="Main Logo" />
                            <span>Ecommerce</span>
                        </Link>
                    </div>

                    <div className='col-sm-3 d-flex align-items-center part2 '>
                        <Button className='rounded-circle '>
                            <MenuOpenIcon />
                        </Button>
                        <SearchBox />
                    </div>

                    <div className='col-sm-7 d-flex align-items-center part3 justify-content-end'>
                        <Button className='rounded-circle'><LightModeIcon /></Button>
                        <Button className='rounded-circle'><ShoppingCartOutlinedIcon /></Button>
                        <Button className='rounded-circle'><EmailOutlinedIcon /></Button>

                        {/* Notification button with dropdown */}
                        <div>
                            <Button onClick={handleOpenNotifications} className='rounded-circle'>
                                <NotificationsOutlinedIcon />
                            </Button>
                            <Menu
                                className='dropdown-list'
                                anchorEl={notificationAnchorEl}
                                open={notificationOpen}
                                onClose={handleCloseNotifications}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            >
                                <h5 className='py-2 mx-3' style={{ fontSize: "16px" }}>Orders (12)</h5>
                                <hr />
                                <div className='notificationSlider'>
                                    <MenuItem onClick={handleCloseNotifications}>
                                        <div className='notificationSection d-flex '>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='userLogo'>
                                                        <img src={userlogo} alt="User Logo" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='dropDownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Rameshvar </b>
                                                        added his favorite list
                                                        <b> Lether belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className='textSky'>few second ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotifications}>
                                        <div className='notificationSection d-flex '>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='userLogo'>
                                                        <img src={userlogo} alt="User Logo" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='dropDownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Rameshvar </b>
                                                        added his favorite list
                                                        <b> Lether belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className='textSky'>few second ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotifications}>
                                        <div className='notificationSection d-flex '>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='userLogo'>
                                                        <img src={userlogo} alt="User Logo" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='dropDownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Rameshvar </b>
                                                        added his favorite list
                                                        <b> Lether belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className='textSky'>few second ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotifications}>
                                        <div className='notificationSection d-flex '>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='userLogo'>
                                                        <img src={userlogo} alt="User Logo" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='dropDownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Rameshvar </b>
                                                        added his favorite list
                                                        <b> Lether belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className='textSky'>few second ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotifications}>
                                        <div className='notificationSection d-flex '>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='userLogo'>
                                                        <img src={userlogo} alt="User Logo" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='dropDownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Rameshvar </b>
                                                        added his favorite list
                                                        <b> Lether belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className='textSky'>few second ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotifications}>
                                        <div className='notificationSection d-flex '>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='userLogo'>
                                                        <img src={userlogo} alt="User Logo" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='dropDownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Rameshvar </b>
                                                        added his favorite list
                                                        <b> Lether belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p className='textSky'>few second ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                </div>
                                <div className='px-2 mt-1'>
                                    <Button className='btnBlue'>View all notification</Button>
                                </div>

                            </Menu>
                        </div>

                        {/* Profile button */}
                        <div className='myAccWrapper'>
                            <Button onClick={handleOpenProfile} className='myAcc d-flex align-items-center'>
                                <div className='userImg'>
                                    <span className='userLogo'>
                                        <img src={userlogo} alt="User Logo" />
                                    </span>
                                </div>
                                <div className='userInfo'>
                                    <h4>Rameshvar Gupta</h4>
                                    <p>rameshvar@gmail.com</p>
                                </div>
                            </Button>

                            {/* Profile dropdown menu */}
                            <Menu
                                anchorEl={profileAnchorEl}
                                id="account-menu"
                                open={profileOpen}
                                onClose={handleCloseProfile}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            >
                                <MenuItem onClick={handleCloseProfile}>
                                    <ListItemIcon><PersonAdd fontSize="small" /></ListItemIcon>
                                    My Account
                                </MenuItem>
                                <MenuItem onClick={handleCloseProfile}>
                                    <ListItemIcon><LockResetOutlinedIcon fontSize="small" /></ListItemIcon>
                                    Reset Password
                                </MenuItem>
                                <MenuItem onClick={handleCloseProfile}>
                                    <ListItemIcon><Logout fontSize="small" /></ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
