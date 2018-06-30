import React, {Component} from 'react';
import {Layout} from 'antd';
import logo from '../../../images/logo.svg';
import {Link} from 'react-router-dom';
const {Header} = Layout;

class Headers extends Component {

  render() {
    return (
      <Header id="header">
        <div id="logo">
          <Link to="/">
            <img src={logo}/>
          </Link>
          {/*<Avatar src={user && user.headImg}/>*/}
        </div>
      </Header>
    )
  }
}

export default Headers;