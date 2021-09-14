/**
 * @Author: Mingrui Liu
 * @Date: 09/14/21 3:24 PM
 */

class Number {
    formatNumber(num) {
        if (num && num.length > 0) {
            let parts = num.split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return parts.join('.');
        }
        else {
            return '-';
        }
    }
}

export default Number;