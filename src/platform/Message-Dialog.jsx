/**
 * @Author: Mingrui Liu
 * @Date: 2021-09-29 15:08
 */

import React, { Component } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Button from "@material-ui/core/Button";

class MessageDialog extends Component {
    render() {
        return (
            <Dialog open={this.props.showDialog}
                    onClose={this.props.onCancelClick}
                    fullWidth={true}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {this.props.title}
                </DialogTitle>
                <DialogContent id="alert-dialog-description">
                    <DialogContentText>
                        {this.props.message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onContinueClick}
                            variant="contained"
                            color="primary"
                    >
                        {this.props.confirmBtnLabel}
                    </Button>
                    <Button onClick={this.props.onCancelClick}
                            variant="outlined"
                            color="primary"
                    >
                        {this.props.cancelBtnLabel}
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default MessageDialog;