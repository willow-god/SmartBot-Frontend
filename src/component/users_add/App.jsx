import React, { useState } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import axios from 'axios';

const { Option } = Select;

const AddUserForm = () => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        if (values.password !== values.confirmPassword) {
            message.error('两次输入的密码不一致');
            return;
        }

        try {
            await axios.post('http://127.0.0.1:5000/add_user', {
                nickname: values.nickname,
                email: values.email,
                password: values.password,
                role: values.role,
            });
            message.success('用户添加成功');
            form.resetFields();
        } catch (error) {
            message.error('用户添加失败');
        }
    };

    return (
        <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item name="nickname" label="用户名" rules={[{ required: true, message: '请输入用户名' }]}>
                <Input />
            </Form.Item>
            <Form.Item name="email" label="邮箱" rules={[{ required: true, message: '请输入邮箱', type: 'email' }]}>
                <Input />
            </Form.Item>
            <Form.Item name="password" label="密码" rules={[{ required: true, message: '请输入密码' }]}>
                <Input.Password />
            </Form.Item>
            <Form.Item name="confirmPassword" label="再次输入密码" rules={[{ required: true, message: '请再次输入密码' }]}>
                <Input.Password />
            </Form.Item>
            <Form.Item name="role" label="权限" rules={[{ required: true, message: '请选择权限' }]}>
                <Select placeholder="请选择权限">
                    <Option value="admin">Admin</Option>
                    <Option value="user">User</Option>
                </Select>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">添加用户</Button>
            </Form.Item>
        </Form>
    );
};

export default AddUserForm;
