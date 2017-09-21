import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import CSSModules from 'react-css-modules';
import styles from './style.css';
class TipPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        }
    }
    tipIconClick = (params) => {
        this.setState({ isShow: !this.state.isShow });
    }

    render() {
        let tipStyle = this.state.isShow ? {
            display: 'block'
        } : {
                display: 'none'
            };
        return (
            <div styleName="tipBar">
                <span styleName="title">{this.props.title}</span>
                <Icon styleName="tipIcon" type="question-circle-o" onClick={this.tipIconClick} />
                <div styleName="report-tip" style={tipStyle} >
                    <div styleName="tip-arrow" />
                    <div styleName="report-tip-content" >
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}



TipPanel.propTypes = {
    title: PropTypes.string,
};

export default CSSModules(TipPanel, styles)