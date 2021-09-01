/**
 * @Author: Mingrui Liu
 * @Date: 2021/9/1 22:30
 */

import React, { Component } from 'react';
import MUtil from "../util/mutil";

const _mutil = new MUtil();

class UserService extends Component {
    login(loginInfo) {
        return _mutil.request({
            type: 'GET',
            url: './api/login.json', //'http://admintest.happymmall.com/manage/user/login.do'

            data: loginInfo
        });
    }
}

export default UserService;