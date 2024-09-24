import React, { useEffect, useState } from "react";
import axios from 'axios';

const ResponseAPI  = () => {
   const [hello, setHello] = useState([]);

    useEffect(() => {
        axios.get("/api/get-data")
            .then((response) => {
                setHello(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            백엔드에서 가져온 특기코드 : 
            {data.map(item => (
                <div key={item.id}>
                    <p>{item.teukgiCode}</p>
                    <p>{item.teukgiCodeStr}</p>
                    <p>{item.gunGubun}</p>
                </div>
            ))}
        </div>
    );
};

export default ResponseAPI;