import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoDocumentSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import "bulma/css/bulma.min.css"

const Sidebar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/"}>
              <IoHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/pra-usulan"}>
              <IoDocumentSharp /> Document
            </NavLink>
          </li>
          {user && user.role === "admin" && (
            <div>
              <li>
                <NavLink to={"/verifikator"}>
                  <IoPricetag /> Usulan
                </NavLink>
              </li>
              </div>
          )}
            {user && user.role === "direktur" && (
            <div>
              <li>
                <NavLink to={"/direktur"}>
                  <IoPerson /> Direktur
                </NavLink>
              </li>
            </div>
             )}
        </ul>
      
      </aside>
    </div>
  );
};
export default Sidebar;