
import {SEND_MESSAGE} from "../action/MessageAction"
import { combineReducers } from 'redux';

var initialState = {
    ifShowModal:false
}

// const go = (state = initialState) =>{
//     console.log(state)
// }

// go()

function update(state = initialState, action) {
        // 根据不同的action type进行state的更新
        switch(action.type) {
            case SEND_MESSAGE:
                return Object.assign({}, state , action)
                break
            default:
                return state
        }
}

const totalReducer = combineReducers({
    update
});

export default totalReducer