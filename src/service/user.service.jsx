/**
 * @Author: Mingrui Liu
 * @Date: 2021-09-27 14:46
 */

import MUtil from "../util/mutil";

const _mutil = new MUtil();

class UserService {
    login(loginInfo) {
        return _mutil.request({
            type: 'POST',
            url: '/manage/user/login.do',
            data: loginInfo
        });
    }

    logout() {
        return _mutil.request({
            type: 'POST',
            url: '/user/logout.do'
        });
    }
}

export default UserService;