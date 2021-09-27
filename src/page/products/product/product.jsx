/**
 * @Author: Mingrui Liu
 * @Date: 2021-09-27 14:46
 */

import React, { Component } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import PageTitle from "../../../components/page-title/page-title";
import ProductService from '../../../service/product.service';
import MUtil from '../../../util/mutil';

const _product = new ProductService();
const _mutil = new MUtil();

const columns = [
    {
        dataIndex: 'id',
        title: 'ID',
        render: id => `${id}`,
        width: '5%'
    },
    {
        dataIndex: 'name',
        title: 'Name',
        render: name => `${name}`,
        width: '10%'
    },
    {
        dataIndex: 'price',
        title: 'Price',
        render: price => `${price}`,
        width: '5%'
    },
    {
        dataIndex: 'status',
        title: 'Status',
        render: status => `${status}`,
        width: '10%'
    },
    // {
    //     dataIndex: 'action',
    //     title: 'Action',
    //     render: id => `${id.value}`,
    //     width: '10%'
    // },
];

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list            : [],
            pageNum         : 1,
            listType        : 'list',
            pageSize: 10
        }
    }

    componentDidMount() {
        this.getProductList();
    }

    getProductList() {
        let listParam = {};
        listParam.listType = this.state.listType;
        listParam.pageNum  = this.state.pageNum;
        listParam.pageSize  = this.state.pageSize;
        // 如果是搜索的话，需要传入搜索类型和搜索关键字
        // if(this.state.listType === 'search'){
        //     listParam.searchType = this.state.searchType;
        //     listParam.keyword    = this.state.searchKeyword;
        // }
        // 请求接口
        _product.getProductList(listParam).then(res => {
            this.setState(res);
        }, errMsg => {
            this.setState({
                list : []
            });
            _mutil.errorTips(errMsg);
        });
    }

    render() {
        return (
            <div className="product-list">
                <PageTitle title="Products" />
                <div className="product-table">
                    <Table
                        columns={columns}
                        // rowKey={record => record.login.uuid}
                        dataSource={this.state.list}
                        // pagination={this.state.pagination}
                        // loading={this.state.loading}
                    />
                </div>
            </div>
        );
    }
}

export default Product;