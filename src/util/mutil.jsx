/**
 * @Author: Mingrui Liu
 * @Date: 2021/9/1 20:36
 */
import $ from 'jquery';

class MUtil {
    request(param) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: param.type || 'GET',
                url: param.url || '',
                dataType: param.dataType || 'json',
                data: param.data || null,
                success: res => {
                    //
                    if (0 === res.status) {
                        typeof resolve === 'function' && resolve(res.data, res.msg);
                    }
                    else if (10 === res.status) {
                        this.doLogin();
                    }
                    else {
                        typeof reject === 'function' && reject(res.msg || res.data);
                    }
                },
                error: err => {
                    typeof reject === 'function' && reject(err.statusText);
                }
            })
        })
    }

    // Login Redirect
    doLogin(){
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
    }

    // Get Url Params
    getUrlParam(name) {
        // ?username=123&password=234
        let queryString = window.location.search.split('?')[1] || '',
            reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            result = queryString.match(reg); // result = ['username=123', '', '123', '&']
        return result ? decodeURIComponent(result[2]) : null;
    }

    // Error Tip
    errorTips(errMsg) {
        alert(errMsg || 'Something’s wrong');
    }
}

export default MUtil;