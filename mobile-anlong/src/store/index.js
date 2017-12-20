import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import totalReducer from "../reducers";



// function created () {
//     const store = createStore(messageList,{});
//     return store
// }   

const store =  createStore(totalReducer,{});

export default store

// import Redux from 'redux'

// // 引入createStore创建store，引入applyMiddleware 来使用中间件
// import {createStore, applyMiddleware,compose} from 'redux'

// // 引入所有的reducer
// import {messageList} from "../reducers";
// import DevTools from '../containers/DevTools'
// // 利用redux-logger打印日志
// import {createLogger} from 'redux-logger'
 

// // 安装redux-devtools-extension的可视化工具。
// import { composeWithDevTools } from 'redux-devtools-extension'


// // 使用日志打印方法， collapsed让action折叠，看着舒服。
// const loggerMiddleware = createLogger({collapsed: true});


// const enhancer = compose(
//     //你要使用的中间件，放在前面
//     //必须的！启用带有monitors（监视显示）的DevTools
//     DevTools.instrument()
//   )

//   export default function createStoreWithMiddleware(initialState){
//     //注意：仅仅只有redux>=3.1.0支持第三个参数
//     const store = createStore(messageList,initialState,enhancer)
//     return store
//   }