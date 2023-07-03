import React, { Fragment } from 'react';
import AccHeader from './AccHeader';
import AccBody from './AccBody';


const Accordion = ({ data, type, device }) => {

    
    
    return (
        <div class={`g_inner ${type} ${device}`}>
            {data.map((item, idx) => {
                return (
                    <div key={idx}>
                        <AccHeader>{item.header}</AccHeader>
                        <AccBody key={`b_${idx}`}>{item.body}</AccBody>
                    </div>
                )
            })}
            
        </div>
    );
};

export default Accordion;