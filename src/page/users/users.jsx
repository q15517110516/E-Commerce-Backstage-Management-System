/**
 * @Author: Mingrui Liu
 * @Date: 09/16/21 4:49 PM
 */

import React, { Component } from 'react';
import PageTitle from "../../components/page-title/page-title";
import { Table } from 'antd';
import 'antd/dist/antd.css';
import MUtil from '../../util/mutil';
import GetUsersService from '../../service/getUsers.service';

const _mutil = new MUtil();
const _getUser = new GetUsersService();

const columns = [
    {
        dataIndex: 'id',
        title: 'ID',
        width: '10%'
    },
    {
        dataIndex: 'name',
        title: 'Name',
        render: name => `${name.first} ${name.last}`,
        width: '10%'
    },
    {
        dataIndex: 'age',
        title: 'Age',
        sorter: true,
        width: '10%'
    },
    {
        dataIndex: 'email',
        title: 'Email',
        width: '15%'
    },
    {
        dataIndex: 'phone',
        title: 'Phone',
        width: '15%'
    },
    {
        dataIndex: 'registration time',
        title: 'Registration Time',
        width: '20%'
    }
];



class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            otherData: [],
            pagination: {
                current: 1,
                pageSize: 10,
            }
        }
    }

    componentDidMount() {
        this.getUsers(this.state.pagination);
    }

    handleTableChange = (pagination, sorter) => {
        this.getUsers({
            sortField: sorter.field,
            sortOrder: sorter.order,
            pagination
        });
    };

    getUsers(params = {}) {
        _getUser.getRandomUsers()
            .then(data => {
                this.setState({
                    data: data.results,
                    pagination: {
                        ...params.pagination,
                        total: data.totalCount,
                    }
                    // other.
                })
            })
    }

    render() {
        return (
            <div>
                <PageTitle title="Users" />
                <div className="user-table">
                    <Table
                        columns={columns}
                        rowKey={record => record.login.uuid}
                        dataSource={this.state.data}
                        pagination={this.state.pagination}
                        onChange={this.handleTableChange}
                    />
                </div>
            </div>
        );
    }
}

export default Users;