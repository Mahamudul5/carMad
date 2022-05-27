import { useEffect, useState } from 'react';

const useData = () => {
    const [dataItem, setData] = useState([])
    useEffect(() => {
        fetch('https://lit-savannah-99211.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setData(data));
    }
        , [dataItem])
    return [dataItem, setData];
};

export default useData;