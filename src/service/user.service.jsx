/**
 * @Author: Mingrui Liu
 * @Date: 2021/9/2 17:21
 */

import MUtil from "../util/mutil";

const _mutil = new MUtil();

class UserService {
    login(loginInfo) {
        return _mutil.request({
            type: 'POST',
            url: 'http://adminv2.happymmall.com/manage/user/login.do',
            data: loginInfo
        });
    }

    logout() {
        return _mutil.request({
            type: 'POST',
            url: 'http://adminv2.happymmall.com/user/logout.do'
        });
    }
}

export default UserService;