import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import ReduxPromise from 'redux-promise';
import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
< Provider
store = {createStoreWithMiddleware(reducers)} >
    < App / >
    < /Provider>
    , document.querySelector('.container')
)
;
