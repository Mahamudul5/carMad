import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './UpdateSingleItem.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useForm } from 'react-hook-form';
const UpdateSingleItem = () => {
    const { Id } = useParams();
    const [item, setItem] = useState({});
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();


    useEffect(() => {
        const url = `https://lit-savannah-99211.herokuapp.com/item/${Id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    });
    const onSubmit = data => {
        const url = "http:// https://lit-savannah-99211.herokuapp.com/orders";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    };



    return (
        <div className='bg-primary'>
            <div className="w-[75%] mx-auto block lg:flex h-screen lg:justify-between items-center bg-hero-pattern">
                <div className="card card-compact w-96 bg-base-100 shadow-xl">

                    <figure><img className='max-h-[220px] rounded mt-5 ' src={item.img} alt={item.name} /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{item.name}</h2>
                        <p>{item.description}</p>
                        <p className='font-bold text-sm'>Available quantity:{item.quantity}</p>
                        <p className='font-bold text-sm'>Minimum order :{item.orderQuantity}</p>
                        <p className='font-bold text-sm'>Price:{item.price}/pcs</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-xl font-semibold  text-center">Purchase Now</h2>
                        <form className='w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                            <label class="label">
                                <span class="label-text">Name:</span>
                            </label>
                            <input type="name" value={user.displayName} class="input input-bordered w-full max-w-xs"  {...register("name")} /> <br />
                            <label class="label">
                                <span class="label-text">Email:</span>
                            </label>
                            <input type="email" value={user.email} class="input input-bordered w-full max-w-xs" readOnly {...register("email")} /> <br />
                            <label class="label">
                                <span class="label-text">Pruduct Name:</span>
                            </label>
                            <input type="name" value={item.name} class="input input-bordered w-full max-w-xs" readOnly {...register("pruductName")} /> <br />

                            <label class="label">
                                <span class="label-text">Quantity:</span>
                            </label>
                            {Error}
                            <input type="number" placeholder={item?.orderQuantity} class="input input-bordered w-full max-w-xs" required {...register("quantity")} /> <br />

                            <label class="label">
                                <span class="label-text">Pruduct Image:</span>
                            </label>
                            <input type="img" value={item.img} class="input" readOnly {...register("img")} /> <br />

                            <input type="submit" value={"Purchase"} class="btn btn-primary  mt-3" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateSingleItem;