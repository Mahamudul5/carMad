import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='d-lg-flex d-sm-block main-div container mt-3 '>
            <div className='images w-50%'>
                <img className='img-fluid' src="../images/bannerPhotoMain.jpg" alt="" />
            </div>
            <div className='w-50% ms-5 mt-2 b-right'>
                <h6 >---Since From 2000</h6>
                <h1 className='company display-1 mb-3'>Company</h1>
                <h1 className='overview w-50%'>Overview</h1>
                <p>CarMad is the world’s driving worldwide coordinations supplier of car accessories . — we uphold industry and exchange the worldwide trade of merchandise through land transport.</p>
            </div>
        </div>
    );
};

export default Banner;