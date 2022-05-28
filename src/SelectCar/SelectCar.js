import React from 'react';


const SelectCar = () => {
    return (
        <div>
            <h1 className='text-center mt-3 text-primary'> Select Car</h1>
            <form className='w-50 mx-auto'>
                <div class="form-group">
                    <input type="email" className="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Brand Name" />
                </div>
                <div class="form-group">
                    <input type="email" className="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Model Name" />
                </div>
                <div class="form-group">
                    <input type="email" className="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Select Year" />
                </div>
                <div class="form-group">
                    <input type="email" className="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Select type" />
                </div>


                <button type="submit" className="btn btn-primary mt-3 mb-3">Search</button>

            </form>

        </div>
    );
};

export default SelectCar;