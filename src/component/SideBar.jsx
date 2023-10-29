import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoDocumentSharp } from "react-icons/io5";
import "bulma/css/bulma.min.css"

const Sidebar = () => {

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/pra-usulan"}>
              <IoDocumentSharp /> Document
            </NavLink>
          </li>
          <li>
            <NavLink to={"/verifikator"}>
              <IoPricetag /> Usulan
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <IoHome /> Dashboard
            </NavLink>
          </li>
        </ul>
      
      </aside>
    </div>
  );
};
export default Sidebar;