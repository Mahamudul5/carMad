import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import OurServices from '../OurServices/OurServices';
import Network from '../Network/Network';
import Reviews from '../Reviews/Reviews';
import SelectCar from '../SelectCar/SelectCar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <SelectCar></SelectCar>
            <OurServices></OurServices>
            <Network></Network>
            <Reviews></Reviews>


        </div>
    );
};

export default Home;