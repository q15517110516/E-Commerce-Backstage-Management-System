/**
 * @Author: Mingrui Liu
 * @Date: 2021/8/24 16:02
 */

import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Input, Button } from 'antd';
import './login.css';
import 'antd/dist/antd.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = (values) => {
        console.log('e')
    }
    render() {
        return (
            <div className="login-page">
                <Card className="login-panel">
                    <CardContent className="login-panel-content">
                        <Typography className="login-panel-heading"
                                    variant="h5"
                                    color="textSecondary"
                                    gutterBottom>
                            Welcome! Please Login
                        </Typography>
                        <Typography className="login-panel-body" >
                            <Form name="login"
                                  className="login-form"
                                  onFinish={this.onSubmit}>
                                {/*Username*/}
                                <Form.Item name="username"
                                           rules={[
                                               {
                                                   required: true,
                                                   message: 'Please input your Username!',
                                               },
                                           ]}>
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />}
                                           placeholder="Username" />
                                </Form.Item>
                                {/*Password*/}
                                <Form.Item name="password"
                                           rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Password!',
                                                },
                                            ]}>
                                    <Input prefix={<LockOutlined className="site-form-item-icon" />}
                                           type="password"
                                           placeholder="Password"
                                    />
                                </Form.Item>
                                {/*Login Button*/}
                                <Form.Item>
                                    <Button type="primary"
                                            htmlType="submit"
                                            className="login-form-button">
                                        Log in
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Login;