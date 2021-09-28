/**
 * @Author: Mingrui Liu
 * @Date: 2021-09-28 11:34
 */

import React, { Component } from 'react';
import { Table, Space, Switch } from 'antd';
import 'antd/dist/antd.css';
import './product.css';
import PageTitle from "../../../components/page-title/page-title";
import ProductService from '../../../service/product.service';
import MUtil from '../../../util/mutil';
import { Link } from 'react-router-dom';

const _product = new ProductService();
const _mutil = new MUtil();

const columns = [
    {
        dataIndex: 'id',
        title: 'ID',
        render: id => `${id}`,
        width: '10%'
    },
    {
        dataIndex: 'name',
        title: 'Name',
        render: name => `${name}`,
        width: '45%'
    },
    {
        dataIndex: 'price',
        title: 'Price',
        render: price => `${'$ ' + price}`,
        width: '15%'
    },
    {
        dataIndex: 'status',
        title: 'Status',
        render: status => (
                <Space size="large">
                    <Switch checked={status === 1} />
                    <span>{status === 1 ? 'In Stock' : 'Out of Stock'}</span>
                </Space>
        ),
        width: '15%'
    },
    {
        title: 'Action',
        render: (data) => (
            <Space size="large">
                <Link to={`/product/${data.id}/detail`}>
                    Details
                </Link>
                <Link to={`/product/${data.id}/edit`}>
                    Edit
                </Link>
                {/*<a>{data.status === 1 ? 'Remove' : 'Publish'}</a>*/}
            </Space>
        ),
        width: '15%'
    },
];

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            listType: 'list',
            pageNum: 1,
            pageSize: 10,
            total: 0,
            loading: false
        }
    }

    componentDidMount() {
        this.getProductList();
    }

    getProductList() {
        this.setState({
            loading: true
        })

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
            this.setState({
                loading: false
            })
        }, errMsg => {
            this.setState({
                list : []
            });
            _mutil.errorTips(errMsg);
        });
    }

    onPageNumChange(current){
        this.setState({
            pageNum : current
        }, () => {
            this.getProductList();
        });
    }

    onPageSizeChange(pageSize, current) {
        this.setState({
            pageSize: pageSize
        })
    }

    render() {
        const paginationProps = {
            current: this.state.pageNum,
            pageSize: this.state.pageSize,
            total: this.state.total,
            onChange: pageNum => this.onPageNumChange(pageNum),
            onShowSizeChange: (current, pageSize) => this.onPageSizeChange(pageSize,current),
        }
        return (
            <div className="product-list">
                <PageTitle title="Products" />
                <div className="product-table">
                    <Table
                        columns={columns}
                        rowKey={record => record.id}
                        dataSource={this.state.list}
                        pagination={paginationProps}
                        loading={this.state.loading}
                        scroll={{ y: 700 }}
                    />
                </div>
            </div>
        );
    }
}

export default Product;