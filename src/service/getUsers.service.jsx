/**
 * @Author: Mingrui Liu
 * @Date: 09/16/21 6:12 PM
 */

import $ from 'jquery';

class GetUsersService {
    getRandomUsers() {
        return $.ajax({
            url: 'https://randomuser.me/api/?results=240&nat=us',
            dataType: 'json'
        });
    }
}

export default GetUsersService;