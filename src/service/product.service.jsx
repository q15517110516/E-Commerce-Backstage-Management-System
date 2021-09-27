/**
 * @Author: Mingrui Liu
 * @Date: 2021-09-27 14:46
 */

import MUtil from "../util/mutil";

const _mutil = new MUtil();

class ProductService {
    getProductList(params) {
        let url = '',
            data = {};

        if (params.listType === 'list') {
            url = '/manage/product/list.do';
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