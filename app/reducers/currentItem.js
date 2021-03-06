import { SETUP_CURRENT_ITEM } from '../actions/currentItem';

const reducer = (state = {}, action) => {
    switch (action.type) {
    case SETUP_CURRENT_ITEM:
        return {
            ...state,
            item: action.item,
            color: action.color,
        };
    default: return state;
    }
};

export default reducer;
