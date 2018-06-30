import {spawn} from 'redux-saga/effects';
import list from './list';

export default function* () {
  yield [
    spawn(list),
  ];
}