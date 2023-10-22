import { Menu } from "antd";
import React from "react";
import {HomeOutlined, DatabaseOutlined} from "@ant-design/icons"
import "./style/style.css"

const MenuList = ({darkTheme}) => {
    const MenuItems = [
        {key:"1", label:"Home"}
    ]
    return(
        <Menu theme={darkTheme ? 'dark' : 'light'} className="menu-bar">
            <Menu.Item key="home" icon={<HomeOutlined/>}>
                Home
            </Menu.Item>
            <Menu.Item key="home" icon={<DatabaseOutlined/>}>
                Daftar Surat
            </Menu.Item>
        </Menu>
    )
}

export default MenuList