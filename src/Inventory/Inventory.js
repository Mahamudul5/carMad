import React from 'react';
import Item from './Item';
import './Inventory.css';
import useData from '../CustomHooks/useData';

const Inventory = () => {
    const [Inventory] = useData();
    return (
        <div>
            <h1 className='text-center text-primary mt-5'>Products</h1>
            <div className='Item-card'>
                {
                    Inventory.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>).slice(0, 6)}
            </div>
        </div>
    );
};

export default Inventory;