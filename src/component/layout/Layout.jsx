import React from 'react';
import Menu from '../menu/menu.jsx';  // 导入Menu组件

const Layout = ({ children }) => (

    <div>
        <h2 className='header'
            style={{
                margin: "0 0",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                padding: "10px",
                paddingRight: "30px",
                paddingBottom: "20px",
                paddingTop: "20px",
                justifyContent: "center",
                borderBottom: "1px solid #ccc",
            }}
        >
            <span style={{ margin: "0 5px" }}>😊</span>
            智能QQ机器人
        </h2>
        <div className="container">
            <div className="container-menu">
                <Menu />
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    </div>

);

export default Layout;
