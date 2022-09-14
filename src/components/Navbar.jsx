import { Outlet, Link } from "react-router-dom";
import React from 'react'

// import images

import Logo from "../images/LogoMetrix.png"

const Navbar = () => {


  const solo = (e) => {


    let solo = document.getElementsByClassName("light")
    for (let i = 0; i < solo.length; i++) {
      const element = solo[i]
      element.classList.remove("active")
      console.log(element);

    }

    let a = e.target
    a.classList.add("active");
    console.log(a);

  }
  const news = 15;

  return (
    <div className='Navbar'>
      <div className="Navbar_logo">
        <img src={Logo} alt="Metrix Logo" />
        <h1>Metrix</h1>
      </div>
      <ul className="Navbar_links">
        <li>
          <Link to="/navbar" className="solo" onClick={solo}>
            <div className="light active">
              <img src={require("../images/icons/navbar/light/Category.png")} />
              <img src={require("../images/icons/navbar/bulk/Category.png")} /> Dashboard {news ? <span>{news}</span> : null}</div></Link>
        </li>
        <li  >
          <Link to="/navbar" className="solo" onClick={solo} >
            <div className="light">
              <img src={require("../images/icons/navbar/light/Bag.png")} />
              <img src={require("../images/icons/navbar/bulk/Bag.png")} />  Orders {news ? <span>{news}</span> : null}
            </div>
          </Link>
        </li>

        <li >
          <Link to="/navbar" className="solo" onClick={solo}>
            <div className="light">
              <img src={require("../images/icons/navbar/light/2 User.png")} />
              <img src={require("../images/icons/navbar/bulk/2 User.png")} /> Customers {news ? <span>{news}</span> : null}</div></Link>
        </li>

        <li >
          <Link to="/navbar" className="solo" onClick={solo}>
            <div className="light">
              <img src={require("../images/icons/navbar/light/Folder.png")} />
              <img src={require("../images/icons/navbar/bulk/Folder.png")} /> Inventory{news ? <span>{news}</span> : null}
            </div></Link>
        </li>
        <li >
          <Link to="/navbar" className="solo" onClick={solo}>
            <div className="light">
              <img src={require("../images/icons/navbar/light/Chat.png")} />
              <img src={require("../images/icons/navbar/bulk/Chat.png")} /> Conversations {news ? <span>{news}</span> : null}
            </div>
          </Link>
        </li>
        <li >
          <Link to="/navbar" className="solo" onClick={solo}>
            <div className="light">
              <img src={require("../images/icons/navbar/light/Setting.png")} />
              <img src={require("../images/icons/navbar/bulk/Setting.png")} /> Settings {news ? <span>{news}</span> : null}</div></Link>
        </li>
      </ul>
      <div className="buttons">


      </div>
      <Outlet />
    </div >
  )
}

export default Navbar