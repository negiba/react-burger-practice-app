import React, { Component } from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

class modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate() {
        console.log('[Modal] Will Update');
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transition: this.props.show ? 'translate(0)' : 'translate(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>);
    }
}

export default modal;
