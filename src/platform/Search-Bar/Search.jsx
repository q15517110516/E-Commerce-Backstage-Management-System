/**
 * @Author: Mingrui Liu
 * @Date: 2021-11-09 1:52 PM
 */

import React, { Component } from 'react';
import { Input, Radio } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterCategory: 'productId',
            filterValue: ''
        }
        this.filterChange = this.filterChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    // Change search filter
    filterChange(e) {
        let name = e.target.name,
            value = e.target.value.trim();
        this.setState({
            [name]: value
        })
    }

    onSearch() {
        this.props.onSearch(this.state.filterCategory, this.state.filterValue);
    }

    render() {
        return (
            <div>
                <Radio.Group onChange={e => this.filterChange(e)}
                             value={this.state.filterCategory}
                             defaultValue={'productId'}
                             name="filterCategory"
                >
                    <Radio value={'productId'}>ID</Radio>
                    <Radio value={'productName'}>Name</Radio>
                </Radio.Group>
                <Input  className="search-box"
                        placeholder="Search"
                        name="filterValue"
                        suffix={
                            <SearchOutlined className="search-icon" />
                        }
                        onPressEnter={this.onSearch}
                        onChange={e => this.filterChange(e)}
                        style={{ width: '25%', marginBottom: 30 }}
                />
            </div>
        );
    }
}

export default Search;