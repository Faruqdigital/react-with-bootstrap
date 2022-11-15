import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        {id: 1, name: 'Mac Book Pro', price: 145000},
        {id: 2, name: 'ipad', price: 45000},
        {id: 3, name: 'iphone', price: 100000}
    ]
    return (
        <div className="card-group">
            {
                products.map(product => <Card key={product.id} product = {product}></Card>)
            }
        </div>
    );
};

export default CardGroup;