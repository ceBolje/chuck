import { LOAD_POST } from '../actions/postActions'

const postReducer = (state = [], action) => {

    //console.log(action);

    switch(action.type) {
        case LOAD_POST:
            return [action.post];
        default:
            return state;
    }
}

export default postReducer;