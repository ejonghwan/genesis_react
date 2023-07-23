import React from 'react';
import { useParams } from 'react-router-dom';

const Test = ({ href }) => {

    const params = useParams()

    console.log(params.userName)
    
    return (
        <div style={{ height: "1000px", background: "black", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <a href={href} >aaaaaaaaaaaaaaaa</a>
            <p style={{ color: "#fff", fontSize: "50px" }}>asdasd {params.userName}</p>
        </div>
    );
};

export default Test;