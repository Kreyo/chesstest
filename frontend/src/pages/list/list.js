import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadItems } from '../../actions';
import Paginator from '../../components/paginator';
import './list.css';

function ItemsList() {
    const items = useSelector(state => state.itemsStore.pageItems);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(loadItems());
    }, [dispatch]);

    const displayEmptyMessage = () => !items.length ? <p>No items yet ;(</p> : '';
    const displayItemList = () =>
      items.map(item =>
        <li className="list__item" key={item.id}><Link to={`/item/${item.id}`}>{item.title}</Link></li>);

    return (
      <div className="list">
        <h3>List of items</h3>
        { displayEmptyMessage() }
        { displayItemList() }
        <Paginator></Paginator>
      </div>
    );
}

export default ItemsList;