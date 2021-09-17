/**
 * @Author: Mingrui Liu
 * @Date: 09/17/21 5:48 PM
 */

import MUtil from "../util/mutil";

const _mutil = new MUtil();

class ProductService {
    getProductList(params) {
        let url = '',
            data = {};

        if (params.listType === 'list') {
            url = 'http://adminv2.happymmall.com/manage/product/list.do';
            data.pageNum = params.pageNum;
            data.pageSize = params.pageSize;
        }
        return _mutil.request({
            type    : 'POST',
            url     : url,
            data    : data
        });
    }
}

export default ProductService;