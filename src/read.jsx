
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        await axios
            .get("http://localhost:4000/findGame")
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    setData(res.data.data);
                }
            })
            .catch((err) =>  console.log(err));
    };

    useEffect(() => {
        getData();
    }, []);
console.log(data);
    const handleDelete = async (id) => {
        await axios
            .delete(`http://localhost:4000/DeletDetails?GameName=${id}`)
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    
                    setData((state) => {
                        const filteredData = state.filter((val) => val.id !== id);
                        return filteredData;
                    });
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {data?.map((val) => (
                <div key={val._id}>
                    <Link to={`/update/${val._id}`}>
                    <Link to ="/update"><button>Update</button></Link>
                    </Link>
                    <button  onClick={() => handleDelete(val._id)}>Delete</button>
                    <h2 style={{color:"red"}}>User Name: {val.UserName}</h2>
                    <h4 >Email: {val.Email}</h4>
                    <h4>Game Name: {val.GameName}</h4>
                </div>
            ))}
        </div>
    );
};



export default Read;
