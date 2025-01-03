import React, { useState, useEffect } from "react";
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
    MenuOutlined,
} from "@ant-design/icons";
import { Menu, Drawer, Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const items = [
    {
        key: "home",
        label: "主页",
        type: "group",
        children: [
            {
                key: "/",
                label: "主页导航",
            },
        ],
    },
    {
        type: "divider",
    },
    {
        key: "sx",
        label: "实现",
        type: "group",
    },
    {
        key: "gn",
        label: "功能",
        icon: <AppstoreOutlined />,
        children: [
            {
                key: "gn-sssj",
                label: "分类检索",
                type: "group",
                children: [
                    {
                        key: "/text-search",
                        label: "文本检索",
                    },
                    {
                        key: "/global-search",
                        label: "全局检索",
                    },
                ],
            },
        ],
    },
    {
        key: "gl",
        label: "管理",
        icon: <MailOutlined />,
        children: [
            {
                key: "/data-management",
                label: "数据管理",
            },
            {
                key: "/upload",
                label: "Minio上传",
            },
            {
                key: "gl-zhgl",
                label: "账户管理",
                children: [
                    {
                        key: "/users-add",
                        label: "添加账户",
                    },
                    {
                        key: "/users-management",
                        label: "管理账户",
                    },
                ],
            },
        ],
    },
    {
        key: "sz",
        label: "设置",
        icon: <SettingOutlined />,
        children: [
            {
                key: "sz1",
                label: "系统设置",
            },
            {
                key: "sz2",
                label: "页面设置",
            },
            {
                key: "sz4",
                label: "高级设置",
            },
            {
                key: "sz3",
                label: "自定义",
            },
        ],
    },
    {
        type: "divider",
    },
    {
        key: "wm",
        label: "我们",
        type: "group",
        children: [
            {
                key: "/interface-description",
                label: "接口说明",
            },
            {
                key: "/about",
                label: "关于",
            },
        ],
    },
];

const MenuComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [openKeys, setOpenKeys] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // 判断是否为移动端
    const [drawerVisible, setDrawerVisible] = useState(false); // 控制抽屉显示

    useEffect(() => {
        setSelectedKeys([location.pathname]);
        const parentKey = findParentKey(location.pathname);
        setOpenKeys(parentKey ? [parentKey] : []);
    }, [location.pathname]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const onClick = (e) => {
        setSelectedKeys([e.key]);
        navigate(e.key);
        if (isMobile) {
            setDrawerVisible(false); // 移动端关闭抽屉
        }
    };

    const findParentKey = (key) => {
        for (const item of items) {
            if (item.children) {
                for (const child of item.children) {
                    if (child.key === key) {
                        return item.key;
                    } else if (child.children) {
                        for (const subChild of child.children) {
                            if (subChild.key === key) {
                                return item.key;
                            }
                        }
                    }
                }
            }
        }
        return null;
    };

    return (
        <div>
            {isMobile ? (
                <>
                    <Button
                        type="primary"
                        icon={<MenuOutlined />}
                        onClick={() => setDrawerVisible(true)}
                        style={{ marginBottom: 16 }}
                    />
                    <Drawer
                        title="导航菜单"
                        placement="left"
                        onClose={() => setDrawerVisible(false)}
                        open={drawerVisible}
                    >
                        <Menu
                            onClick={onClick}
                            selectedKeys={selectedKeys}
                            openKeys={openKeys}
                            onOpenChange={(keys) => setOpenKeys(keys)}
                            mode="inline"
                            items={items}
                        />
                    </Drawer>
                </>
            ) : (
                <Menu
                    onClick={onClick}
                    style={{ width: 256 }}
                    selectedKeys={selectedKeys}
                    openKeys={openKeys}
                    onOpenChange={(keys) => setOpenKeys(keys)}
                    mode="inline"
                    items={items}
                />
            )}
        </div>
    );
};

export default MenuComponent;
