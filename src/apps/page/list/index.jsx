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
    this.props.fetchArticleList();
  }

  render() {
    const {list} = this.props;
    return (
      <div>
        <List>
          {
            list && list.map((item, i) =>
              <List.Item key={i}>
                <Link
                  to={'/article/' + parseInt(i + 1)}
                >
                  {/*<Icon type={item.type}/>*/}
                  <span> {item[i + 1]}</span>
                </Link>
              </List.Item>
            )
          }
        </List>
        <Row gutter={16}>
          {
            list && list.map((item, i) =>

              <Col xs={{ span: 10}} sm={{ span: 8}}  md={{ span: 8}} lg={{ span: 6}} xl={{ span: 4}} key={i}>
                <Link
                  to={'/article/' + parseInt(i + 1)}
                >
                <Card title={item[i + 1]}>
                  <p>Card content</p>
                </Card>
                </Link>
              </Col>

            )
          }
        </Row>
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
  fetchUserArticle: (payload) => dispatch({
    type: actionTypes.FETCH_USER_ARTICLE,
    payload
  }),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));





