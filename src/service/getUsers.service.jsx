/**
 * @Author: Mingrui Liu
 * @Date: 09/16/21 6:12 PM
 */

import $ from 'jquery';

class GetUsersService {
    getRandomUsers() {
        return $.ajax({
            url: 'https://randomuser.me/api/?results=240',
            dataType: 'json',
            success: function (res) {
                console.log(res);
            }
        });
    }


}

export default GetUsersService;