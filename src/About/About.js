import React from 'react';
import img from '../images/myProfile.jpg'
import './About.css'

const About = () => {
    return (
        <div className='main-about container-fluid mt-5'>
            <div className='mx-auto'>
                <h1>Hi !!!</h1>
                <h2>I am <span>Mahamudul hasan</span></h2>
                <h5> Founder & Ceo Home Of Success.</h5>
                <p>I am a Teacher of Math and Ict. I want to start some new courses soon. Everyday i learn about some basic subject and try to help my students.I am very friendly to my students.I try ti learn html,css,js ,react.js,mongoDb,node.js etc.</p>
                <button className='btn btn-primary mb-5 mx-auto'> Contact</button><br />
                <h4>my projects</h4>
                <a href="https://home-of-success.netlify.app"> Project1</a><br />
                <a href="https://drone-reviewer.netlify.app/">Project2</a>


            </div>
            <div className=' mx-auto'>
                <img className='mx-auto img-fluid' src={img} alt="" />
            </div>

        </div>
    );
};

export default About;