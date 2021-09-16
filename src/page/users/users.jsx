/**
 * @Author: Mingrui Liu
 * @Date: 09/16/21 4:49 PM
 */

import React, { Component } from 'react';
import PageTitle from "../../components/page-title/page-title";
import { Table } from 'antd';
import 'antd/dist/antd.css';
import GetUsersService from '../../service/getUsers.service';
import * as _moment from 'moment';

const moment = _moment;
const _getUser = new GetUsersService();

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
        width: '10%'
    },
    {
        dataIndex: 'dob',
        title: 'Age',
        render: dob => `${dob.age}`,
        width: '5%'
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
        dataIndex: 'registered',
        title: 'Registration Time',
        render: registered => `${moment(registered.date).format('MM/DD/YYYY h:mm:ss A')}`,
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

        _getUser.getRandomUsers()
            .then(res => {
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
            <div>
                <PageTitle title="Users" />
                <div className="user-table">
                    <Table
                        columns={columns}
                        rowKey={record => record.login.uuid}
                        dataSource={this.state.data}
                        pagination={this.state.pagination}
                        loading={this.state.loading}
                    />
                </div>
            </div>
        );
    }
}

export default Users;