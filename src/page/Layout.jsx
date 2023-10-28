import React from "react";
import '../style/App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../component/SideBar";
import Navbar from "../component/Navbar";
import "bulma/css/bulma.min.css"

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="columns mt-6" style={{ minHeight: "100vh" }}>
        <div className="column is-2">
          <Sidebar />
        </div>
        <div className="column has-background-light">
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
