import React from "react";
import './index.css';
import { HiDotsVertical } from "react-icons/hi";
import { Button } from "@mui/material";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { IoTimerOutline } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const DashBoardBox = (props) => {
    const ITEM_HEIGHT = 48;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { userdetails, userNo, color, icon: UserIcon, grow } = props;
    return (

        <Button className="dashboardBoxSection" style={{
            backgroundImage: `linear-gradient(to right, ${color?.[0]}, ${color?.[1]})`
        }}>
            {grow === true ?
                <span className="chart"><TrendingUpIcon /></span> : <span className="chart"><TrendingDownIcon /></span>
            }


            <div className="d-flex w-100 justify-content-between align-items-center">
                <div className="col1">
                    <h4 className="text-white mb-0">{userdetails}</h4>
                    <span className="user text-white">{userNo}</span>
                </div>

                <div className="col2">
                    <span className="icon">
                        {UserIcon && <UserIcon />}
                    </span>
                </div>
            </div>

            <div className="d-flex align-items-center justify-content-between w-100 bottomElem">
                <h6 className="text-white mb-0 mt-0">Last Month</h6>
                <div className="ml-auto">
                    <Button className="ml-auto toggleIcon" onClick={handleClick}> <HiDotsVertical /></Button>
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                            'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                            paper: {
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '15ch',
                                },
                            },
                        }}
                    >
                        <MenuItem onClick={handleClose}>
                            <IoTimerOutline /> &nbsp; Last Day
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <IoTimerOutline />  &nbsp;Last Week
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <IoTimerOutline /> &nbsp;Last Month
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <IoTimerOutline /> &nbsp;Last Year
                        </MenuItem>

                    </Menu>
                </div>

            </div>

        </Button>
    )
}
export default DashBoardBox