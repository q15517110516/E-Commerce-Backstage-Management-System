/**
 * @Author: Mingrui Liu
 * @Date: 2021-09-28 11:52
 */

import React, { Component } from 'react';
import PageTitle from "../../components/page-title/page-title";
import { Table } from 'antd';
import 'antd/dist/antd.css';
import UserListService from '../../service/user-list.service';

const _getUser = new UserListService();

const columns = [
    {
        dataIndex: 'id',
        title: 'ID',
        render: id => `${id.value}`,
        width: '10%'
    },
    {
        dataIndex: 'name',
        title: 'Name',
        render: name => `${name.first} ${name.last}`,
        width: '20%'
    },
    {
        dataIndex: 'dob',
        title: 'Age',
        render: dob => `${dob.age}`,
        width: '10%'
    },
    {
        dataIndex: 'email',
        title: 'Email',
        width: '20%'
    },
    {
        dataIndex: 'phone',
        title: 'Phone',
        width: '20%'
    },
    {
        dataIndex: 'registered',
        title: 'Registration Time',
        render: registered => `${new Date(registered.date).toLocaleString()}`,
        width: '20%'
    }
];

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: false,
            pagination: {
                current: 1,
                pageSize: 10
            }
        }
    }

    componentDidMount() {
        this.getUsers(this.state.pagination);
    }

    getUsers(params = {}) {
        this.setState({
            loading: true
        });

        _getUser.getRandomUsers().then(res => {
            this.setState({
                loading: false,
                data: res.results,
                pagination: {
                    ...params.pagination,
                    total: res.totalCount,
                }
            })
        })
    }

    render() {
        return (
            <div className="user-list">
                <PageTitle title="Users" />
                <div className="user-table">
                    <Table
                        columns={columns}
                        rowKey={record => record.login.uuid}
                        dataSource={this.state.data}
                        pagination={this.state.pagination}
                        loading={this.state.loading}
                        scroll={{ y: 700 }}
                    />
                </div>
            </div>
        );
    }
}

export default Users;