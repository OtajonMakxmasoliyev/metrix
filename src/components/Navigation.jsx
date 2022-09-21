import React from 'react'

// imnport Images
import Notification from "../images/icons/Notification.png"
import Home from "../images/icons/Home.png"

const Navigation = (props) => {
    return (
        <div className='Navigation'>
            <div className="Navigation_top">
                <div className="Navigation_top_name">
                    <p>{props.name}</p>
                </div>
                <div className="Navigation_top_profile">
                    <select name="profiles" id="">
                        <option value="Nancy">Nanny’s Shop</option>
                    </select>

                    <span><img src={Notification} />{props.notification}</span>

                    <div className="Navigation_top_profile_picture">
                        <img src={require("../images/profile/profile.png")} alt="" />
                    </div>
                </div>
            </div>
            <div className="Navigation_bottom">
                <img src={Home} alt="" />
                <p>{props.pagination}</p>
            </div>
        </div>
    )
}

export default Navigation

