import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../firebase.init';
import './AddReview.css'

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = "http:// https://lit-savannah-99211.herokuapp.com/reviews";
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
        <div className=" w-60 mx-auto bg-base-100 shadow-xl my-5 mt-5 review-card">
            <div className="card-body mx-auto">
                <h2 className="text-xl font-semibold  text-center">Review</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input type="text" value={user?.displayName} class="input input-bordered w-full max-w-xs" readOnly {...register("name")} />
                    <label class="label">
                        <span class="label-text">Description</span>
                    </label>
                    <input type="text" placeholder='description' class="input input-bordered w-full max-w-xs" required {...register("description")} />
                    <label class="label">
                        <span class="label-text">Rating</span>
                    </label>
                    <input type="number" placeholder='star' class="input input-bordered w-full max-w-xs" required {...register("rating")} />




                    <input type="submit" value={"Add Review"} className="btn btn-primary" />
                </form>
            </div>

        </div>
    );
};

export default AddReview;