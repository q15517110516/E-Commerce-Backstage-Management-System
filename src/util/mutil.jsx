/**
 * @Author: Mingrui Liu
 * @Date: 2021-09-28 17:42
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
                    // Success
                    if (0 === res.status) {
                        typeof resolve === 'function' && resolve(res.data, res.msg);
                    }
                    // Not logged in, redirect to login page
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

    // Success Message
    successMessage(successMsg) {
        alert(successMsg || 'Operation Successful!');
    }

    // Error Message
    errorMessage(errMsg) {
        alert(errMsg || 'Oops! Something went wrong.');
    }

    // Store Data to LocalStorage
    setStorage(name, data) {
        let dataType = typeof data;
        if (dataType === 'object') {
            window.localStorage.setItem(name, JSON.stringify(data));
        } else if (['number', 'string', 'boolean'].indexOf(dataType) >= 0) {
            window.localStorage.setItem(name, data);
        } else {
            alert('Type cannot be used for localStorage');
        }
    }

    // Get Stored Data
    getStorage(name) {
        let data = window.localStorage.getItem(name);
        if (data) {
            return JSON.parse(data);
        } else {
            return '';
        }
    }

    // Remove Stored Data
    removeStorage(name) {
        window.localStorage.removeItem(name);
    }
}

export default MUtil;