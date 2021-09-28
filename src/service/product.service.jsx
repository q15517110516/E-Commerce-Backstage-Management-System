/**
 * @Author: Mingrui Liu
 * @Date: 2021-09-28 17:51
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
            type: 'POST',
            url: url,
            data: data
        });
    }

    changeProductStatus(productInfo) {
        return _mutil.request({
            type: 'POST',
            url: '/manage/product/set_sale_status.do',
            data: productInfo
        });
    }
}

export default ProductService;