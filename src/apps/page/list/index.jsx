/**
 * Created by dady on 2017/12/15.
 */

import React, {Component} from 'react';
import {List, Card, Col, Row} from 'antd';
import {Editor} from 'react-draft-wysiwyg';
import {Link, withRouter} from "react-router-dom";
import * as actionTypes from "../../../config/actionTypes";
import {connect} from "react-redux";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './index.less';

const defaultState = {
  title: '',
  // article:{
  //   title:'',
  //   content:''
  // }
};

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {...defaultState};
  }


  componentDidMount() {
    console.log(2121)
    // this.props.fetchArticleList();
  }

  render() {
    // const {list} = this.props;
    return (
      <div>
        123
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list.list,
});


const mapDispatchToProps = dispatch => ({
  fetchArticleList: (payload) => dispatch({
    type: actionTypes.FETCH_ARTICLE_LIST,
    payload
  }),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));





