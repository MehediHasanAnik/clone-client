import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/equipments")
            .then((res) => res.json())
            .then((data) => setTools(data));
    }, []);
    return (
        <div>
            <div id="inventories" className="">
                <div className=" container">
                    <h1 className=" title text-center  py-3">
                        OUR MOST POPULAR PERFUME <br /> & COLOGNE BRANDS

                    </h1>
                    <div className="row">
                        {tools.slice(0, 6).map((item) => (
                            <Tool key={item._id} inventory={item}></Tool>
                        ))}
                    </div>
                    <div className="text-center">
                        <Link to="/managePage">
                            <button className="btn btn-primary">Manage Inventories</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;