/**
 * @Author: Mingrui Liu
 * @Date: 09/14/21 4:45 PM
 */

import React, { Component } from 'react';
import img from './Oops.png';
import './error.css';
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

class ErrorPage extends Component {

    componentWillMount() {
        document.title = 'Error';
    }

    render() {
        return (
            <div className="error-page">
                <img className="error-img"
                     src={img}
                     alt="error" />
                <div className="error-text">
                    <p>Sorry, something went wrong.</p>
                </div>
                <div className="back-to-home-btn">
                    <Link to="/">
                        <Button color="primary"
                                fullWidth={true}
                                variant="contained">
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default ErrorPage;