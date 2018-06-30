import React, {Component} from 'react';
import {Layout} from 'antd';
import logo from '../../../images/logo.svg';
import {Link, withRouter} from 'react-router-dom';
const {Header} = Layout;
import {Menu, Icon} from 'antd';
import SiderMenu from '../SiderMenu/index'
import * as actionTypes from "../../../config/actionTypes";
import {connect} from "react-redux";

const defaultState = {

};

class Headers extends Component {
    constructor(props) {
        super(props);
        this.state = {...defaultState};
        this.toggle = this.toggle.bind(this);
        this.onCollapse = this.onCollapse.bind(this);
    }

    toggle() {
        this.onCollapse(!this.props.collapsed)
    }

    onCollapse(collapsed) {
        this.props.menuCollapse(collapsed);
    };


    render() {
        const {user, history, collapsed} = this.props;
    return (
      <Header id="header">
          <SiderMenu
              location={history.location}
              onCollapse={this.onCollapse}
          />
      </Header>
    )
  }
}

const mapStateToProps = state => ({
    collapsed: state.globle.collapsed,
});

const mapDispatchToProps = dispatch => ({
    menuCollapse: (payload) => dispatch({
        type: actionTypes.UPDATE_COLLAPSED,
        payload
    }),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Headers));
