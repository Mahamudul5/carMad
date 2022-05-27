import React from 'react';
import useData from '../CustomHooks/useData';

const RemoveItem = () => {
    const [items, setItems] = useData();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete');
        if (proceed) {
            const url = `https://lit-savannah-99211.herokuapp.com/item/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data));
            const remaining = items.filter(item => item._id !== id)
            setItems(remaining);

        }
    }
    return (
        <div className='text-center'>
            <h1 className='mt-5'>Want to remove  Item?</h1>
            {
                items.map(item => <div>
                    <h4>{item.name} <button onClick={() => handleDelete(item._id)}>x</button> </h4>
                </div>)
            }
        </div>
    );
};

export default RemoveItem;