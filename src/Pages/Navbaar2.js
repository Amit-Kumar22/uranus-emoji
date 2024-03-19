import React, {useEffect} from "react";
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import "../css/navbaar2.css"


function Navbaar2() {
  // };
useEffect(()=>{
  
  const list = document.querySelectorAll(".list");

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));
},[])



  return (
    <div>
      {/* <Navbaars /> */}
      <div className="navigation">
  <ul>
    <li className="list active">
      <a href="#">
        <span className="icon">
          <FaHome />
        </span>
        <span className="text">Home</span>
      </a>
    </li>
    <li className="list">
      <a href="#">
        <span className="icon">
         <IoPersonSharp />
        </span>
        <span className="text">Profile</span>
      </a>
    </li>
    <li className="list">
      <a href="#">
        <span className="icon">
        <FaRegMessage />
        </span>
        <span className="text">Message</span>
      </a>
    </li>
    <li className="list">
      <a href="#">
        <span className="icon">
          <FaCamera />
        </span>
        <span className="text">Photos</span>
      </a>
    </li>
    <li className="list">
      <a href="#">
        <span className="icon">
         <CiSettings />
        </span>
        <span className="text">Settings</span>
      </a>
    </li>
    <div className="indicator"></div>
  </ul>
</div>
    </div>
  );
}

export default Navbaar2;
