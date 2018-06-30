import {handleActions} from 'redux-actions';
import * as actionTypes from '../config/actionTypes';


const inintialState = {
  list:[]
};

export default handleActions({
  [actionTypes.UPDATE_ARTICLE_LIST]: (state, {payload}) => ({
    ...state,
    ...payload
  }),
}, inintialState);
