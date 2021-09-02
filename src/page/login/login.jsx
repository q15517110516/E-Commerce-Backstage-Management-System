/**
 * @Author: Mingrui Liu
 * @Date: 2021/9/2 15:19
 */

import React, { Component } from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Input  } from 'antd';
import './login.css';
import 'antd/dist/antd.css';
import MUtil from '../../util/mutil';
import UserService from '../../service/user.service';

const _mutil = new MUtil();
const _user = new UserService();

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: _mutil.getUrlParam('redirect') || '/'
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        document.title = 'Please Login';
    }

    onInputChange(e) {
        let inputName = e.target.name,
            inputValue = e.target.value;
        this.setState({
            [inputName]: inputValue
        });
    }

    onKeyUp(e) {
        if (e.keyCode === 13) {
            this.onSubmit();
        }
    }

    onSubmit() {
        _user.login({
            username: this.state.username,
            password: this.state.password
        }).then((res) => {
            _mutil.setStorage('userInfo', res); // store username and password to localStorage
            this.props.history.push(this.state.redirect); // redirect after successful login
        }, (errMsg) => {
            _mutil.errorTips(errMsg);
        });
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
                                           name="username"
                                           placeholder="Username"
                                           onChange={e => this.onInputChange(e)}
                                           onKeyUp={e => this.onKeyUp(e)} />
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
                                           name="password"
                                           type="password"
                                           placeholder="Password"
                                           onChange={e => this.onInputChange(e)}
                                           onKeyUp={e => this.onKeyUp(e)} />
                                </Form.Item>
                                {/*Login Button*/}
                                <Form.Item>
                                    <Button color="primary"
                                            fullWidth={true}
                                            variant="contained"
                                            className="login-form-button"
                                            onClick={this.onSubmit}>
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