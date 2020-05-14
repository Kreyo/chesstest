import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { switchPage } from '../../actions';
import './index.css';

function Paginator() {
    const pagesAmount = useSelector(state => state.itemsStore.allItems.length);
    const currentPage = useSelector(state => state.itemsStore.page);
    const dispatch = useDispatch();
    const pages = [];

    for (let i = 1; i <= pagesAmount; i++) {
        pages.push(
            <li className={currentPage === i ? 'active' : ''}
                key={i}
                onClick={() => dispatch(switchPage(i))}>
                {i}
            </li>
        );
        if (i !== pagesAmount) pages.push(',');
    }

    return (
        <div className="paginator">
            <p>Pages</p>
            <ul>
                [{pages}]
            </ul>
        </div>
    );
}

export default Paginator;