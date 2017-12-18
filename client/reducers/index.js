import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from '.comments';

const rootReducer from combineReducers({
  posts,
  comments,
  router: routerReducer
});

export default rootReducer;
