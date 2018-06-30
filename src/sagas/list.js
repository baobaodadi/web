/**
 * Created by dady on 2017/12/15.
 */
import {takeLatest, put} from 'redux-saga/effects';
import service from '../utils/service';
import API from '../config/api';
import * as actionTypes from '../config/actionTypes';
import {ENTITY_LIST} from '../config/constants';


function* fetchArticleList() {


  try {
    const data = yield service.get(API[ENTITY_LIST]);

    console.log(data)

    yield put({
      type: actionTypes.UPDATE_ARTICLE_LIST,
      payload: data,
    });
  }
  catch (e) {

  }
}

export default function* () {
  yield [
    takeLatest(actionTypes.FETCH_ARTICLE_LIST, fetchArticleList),
  ];
}
