import React, { useState, useEffect } from 'react';
import { Table, Button, message, Modal, Form, Input, Space, Select } from 'antd';
import axios from 'axios';

const { Option } = Select;

const UserTable = () => {
    const [data, setData] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [form] = Form.useForm();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/get_users');
            setData(response.data);
        } catch (error) {
            message.error('获取数据失败');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.post('http://127.0.0.1:5000/delete_user', { id });
            message.success('删除成功');
            fetchData();
        } catch (error) {
            message.error('删除失败');
        }
    };

    const handleEdit = (user) => {
        setCurrentUser(user);
        form.setFieldsValue(user);
        setIsModalVisible(true);
    };

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            await axios.post('http://127.0.0.1:5000/update_user', { id: currentUser.id, ...values });
            message.success('修改成功');
            setIsModalVisible(false);
            fetchData();
        } catch (error) {
            message.error('修改失败');
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: '昵称', dataIndex: 'nickname', key: 'nickname' },
        { title: '邮箱', dataIndex: 'email', key: 'email' },
        { title: '权限', dataIndex: 'role', key: 'role' },
        {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button type="primary" onClick={() => handleEdit(record)}>修改</Button>
                    <Button type="primary" danger onClick={() => handleDelete(record.id)}>删除</Button>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Table columns={columns} dataSource={data} rowKey="id" />
            <Modal
                title="修改用户信息"
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form form={form} layout="vertical">
                    <Form.Item name="nickname" label="昵称" rules={[{ required: true, message: '请输入昵称' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="password" label="密码" rules={[{ required: true, message: '请输入密码' }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item name="email" label="邮箱" rules={[{ required: true, message: '请输入邮箱' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="role" label="权限" rules={[{ required: true, message: '请选择权限' }]}>
                        <Select placeholder="请选择权限">
                            <Option value="admin">Admin</Option>
                            <Option value="user">User</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default UserTable;
