import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './details.css';

function ItemsDetails() {
    const { itemId } = useParams();
    const item = useSelector(state => state.itemsStore.pageItems.find(item => item.id == itemId));
    if (!item) {
        return <Link to="/">Something went wrong and needs patching :) Go back for now?</Link>
    }
    return (
      <div className="details">
        <h2>Item {itemId}: {item.title}</h2>
        <p>{item.text}</p>
        <Link to="/">Go back</Link>
      </div>
    );
}

export default ItemsDetails;
