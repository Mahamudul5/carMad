import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://lit-savannah-99211.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='my-10'>
            <h2 className='font-bold text-3xl  text-center my-8'>All Reviews</h2>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-3 m-10 mt-20'>
                {
                    reviews?.slice(-3).map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>

        </div>
    );
};

export default Reviews;