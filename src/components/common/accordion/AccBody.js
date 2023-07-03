import React from 'react';

const AccBody = ({ children }) => {
    
    console.log(children)

    return (
        <div class="acco_body">
            {/* {children.map((item, idx) => <div key={idx}>{item}</div> )} */}
            {children}
        </div>
    );
};

export default AccBody;