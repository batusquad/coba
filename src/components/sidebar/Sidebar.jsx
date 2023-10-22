import { Button, Layout, theme } from "antd";
import "../sidebar/style/sidebar.css"
import Logo from "../logo/Logo";
import MenuList from "./menu/MenuList";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons"
import { useState } from "react";
import ToggleThemeButton from "./menu/theme/ToggleThemeButton";
import Direktur from "../pages/Direktur";

const {Header, Sider} = Layout;
function Sidebar(){
    const [darkTheme, setdarkTheme] = useState(true)
    const [collapsed, setCollapsed] = useState(false);

    const toggleTheme = () => {
        setdarkTheme(!darkTheme)
    }

    const{
        token: {colorBgContainer},
    } = theme.useToken()
    return(
        <>
         <Layout>
            <Sider collapsed={collapsed} collapsible trigger={null} theme={darkTheme ? 'dark' : 'light'} className="sidebar">
                <Logo />
                <MenuList darkTheme={darkTheme}/>
                <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme}/>
            </Sider>
            <Layout>
                <Header style={{padding: 0, background: colorBgContainer}}>
                    <Button type="text" className="toggle" onClick={()=>setCollapsed(!collapsed)} icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }/>
                </Header>
                <Direktur/>
            </Layout>
         </Layout>
        </>
    )
}

export default Sidebar