import React, { useState } from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = ({setToggle,toggle}) => {
  const [show, setShow] = useState(true);
  const [handle,setHandle] = useState("")

  

  return (
    <>
      <div className="nav">

        <div className="left">

          <Link style={{ textDecoration: 'none', color:'red' }} className="logo">

            <h2 >JOB LISTING</h2>

          </Link>

        </div>



        <div className="right">

          <ul>

            <li className={handle==="home"?"active":``} onClick={()=>setHandle("home")}>Home</li>
            <li onClick={()=>setHandle("about")} className={handle==="about"?"active":``}>About</li>
            <li onClick={()=>setHandle("contact")} className={handle==="contact"?`active`:""}>Contact</li>
            <li onClick={()=>setHandle("carrer")} className={handle==="carrer"?`active`:""}>Carrer</li>
            <li onClick={()=>setHandle("signIn")} className={handle==='signIn'?"active":""} >Sign-In</li>
            <li onClick={()=>setToggle(!toggle)}>{toggle ?"Dark":"Light"} Mode</li>

          </ul>

        </div>

        <div className="response">

          <button onClick={() => setShow(!show)}>
            {show ? <IoMenu /> : <IoCloseSharp />}
          </button>

        </div>

      </div>


      <div className= {show?`active-list`:`menu-list`} >
        <div className="mobileView-list">
            <ul>
                <li className={handle === "home" ? "active":""} onClick={()=>setHandle("home")}>Home</li>
                <li className={handle === "about" ? "active":""}onClick={()=>setHandle("about")}>About</li>
                <li className={handle === "contact" ? "active":""} onClick={()=>setHandle("contact")}>Contact</li>
                <li className={handle === "carrer" ? "active":""}onClick={()=>setHandle("carrer")}>Carrer</li>
                <li className={handle === "carrer" ? "active":""}onClick={()=>setHandle("carrer")}>Sign-In</li>
                <li onClick={()=>setToggle(!toggle)}>{toggle ?"Dark":"Light"} Mode</li>
            </ul>

        </div>
      </div>


    </>
  );
};

export default Navbar;
