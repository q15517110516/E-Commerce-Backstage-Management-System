/**
 * @Author: Mingrui Liu
 * @Date: 2021-11-08 5:43 PM
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
        else if (params.listType === 'search') {
            url = '/manage/product/search.do';
            data.pageNum = params.pageNum;
            data[params.searchType] = params.keyword;
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