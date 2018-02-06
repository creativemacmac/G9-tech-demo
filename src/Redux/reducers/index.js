import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import PostsReducer from './reducer_posts';
import AuthReducer from './authReducer';

const rootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer,
    loggedIn: AuthReducer
});

export default rootReducer;