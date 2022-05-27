import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './UpdateSingleItem.css';
const UpdateSingleItem = () => {
    const handleDelivered = () => {
        const newQuantity = parseInt(item.quantity - 1);
        console.log(newQuantity);
        const url = `https://lit-savannah-99211.herokuapp.com/item/${Id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(data => setItem(data))
        alert('delivered');
    }
    const { Id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://lit-savannah-99211.herokuapp.com/item/${Id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    });




    return (
        <div className='UpdateItem'>

            <h2 className='text-center text-primary mt-5'>Item:{item.name}</h2>
            <img src={item.img} alt="" />
            <h4 className='text-center text-primary'>price:{item.price}</h4>
            <h4 className='text-center text-primary '>quantity:{item.quantity}</h4>
            <h5 className='text-center text-primary'>Supplier:{item.supplier}</h5>
            <p className='text-center text-primary'>{item.description}</p>

            {/* <h2 className='text-center text-primary'>Name:{name}</h2>
            <h2 className='text-center text-primary'>Price:{price}</h2> */}
            <div className='text-center'>
                <form>
                    <input className='input' type="number" name="" id="" placeholder='quantity' />
                    <button className='btn btn-primary'>Add</button>
                </form>

                <button onClick={() => handleDelivered()} className='btn btn-primary'>DELIVERED</button>
                <Link className='' eventKey={2} as={Link} to="/ManageInventory">
                    ManageInventory
                </Link>
                <Link className='ms-3' eventKey={2} as={Link} to="/AddItem">
                    AddItem
                </Link>


            </div>
        </div>
    );
};

export default UpdateSingleItem;