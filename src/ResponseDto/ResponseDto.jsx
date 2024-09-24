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
            {hello.map(item => (
                <div key={item.id}>
                    <p>{item.id}: 특기코드: {item.teukgiCode || item.teukgiCodeStr}</p>
                    <p>군사구분: {item.gunGubun}</p>
                    <hr />
                </div>
            ))}

        </div>
    );
};

export default ResponseAPI;