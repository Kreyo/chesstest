import { fetchItems } from '../services/api';
import { ACTIONS } from '../constants';

export const loadItems = () => {
    return dispatch => fetchItems().then(result => dispatch(updateItemsList(result.items)));
};

export const updateItemsList = items => ({
    type: ACTIONS.UPDATE_ITEMS,
    items
});

export const switchPage = page => ({
    type: ACTIONS.SWITCH_PAGE,
    page
});