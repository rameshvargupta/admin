import React from 'react'
import userlogo from '../../assets/images/user.png';

export const UserAvatarImg = (props) => {
    return (
        <div className={`userImg ${props.bigImg === "bl" ? "bigImg" : ""}`}>
            <span className="userLogo">
                <img src={userlogo} alt="User Logo" />
            </span>
        </div>
    )
}
