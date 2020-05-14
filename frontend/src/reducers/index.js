import { chunk } from 'lodash';
import { ACTIONS, initialState } from '../constants';

const items = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_ITEMS:
            state.allItems = chunk(action.items, state.pageSize);
            state.pageItems = state.allItems[state.page - 1];
            return state;
        case ACTIONS.SWITCH_PAGE:
            state.page = action.page;
            state.pageItems = state.allItems[state.page - 1];
            return state;
        default:
            return state;
    }
};

export default items;
