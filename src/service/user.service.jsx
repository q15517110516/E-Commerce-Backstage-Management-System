/**
 * @Author: Mingrui Liu
 * @Date: 2021/9/2 17:21
 */

import React, { Component } from 'react';
import MUtil from "../util/mutil";

const _mutil = new MUtil();

class UserService extends Component {
    login(loginInfo) {
        return _mutil.request({
            type: 'POST',
            url: 'http://admintest.happymmall.com/manage/user/login.do',
            data: loginInfo
        });
    }

    logout() {
        return _mutil.request({
            type: 'POST',
            url: 'http://admintest.happymmall.com/user/logout.do'
        });
    }
}

export default UserService;