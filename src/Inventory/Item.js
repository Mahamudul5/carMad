import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Item.css'



const Item = ({ item }) => {
    const { _id, name, img, price, description, quantity, supplier } = item;
    const navigate = useNavigate();
    const goToDetails = (_id) => {
        navigate(`/UpdateSingleItem/${_id}`)
    }

    return (
        <div >
            <div>
                <Card style={{ width: '18rem' }} className='mb-5 mx-auto Item-main'>
                    <Card.Img className='img-fluid w-100' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='text-center'><h3>{name}</h3></Card.Title>
                        <Card.Text>
                            <h5 className='text-center'>price:{price}</h5>
                            <h5 className='text-center'>quantity:{quantity}</h5>
                            <p className='text-center'>{description}</p>
                            <p className='text-center'>supplier:{supplier}</p>

                        </Card.Text>
                        <Button onClick={() => goToDetails(_id)} variant="primary d-block mx-auto">Purchase</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Item;