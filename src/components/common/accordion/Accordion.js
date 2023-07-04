import React, { useEffect, useState } from 'react';


const Accordion = ({ data, className, device }) => {
    

    const [Active, setActive] = useState(false);
    const [Data, setData] = useState(data);
  
    const [Index, setIndex] = useState(false);
    const handleClick = idx => e => {
        setIndex(idx);
    };

    return (
        <div class={`${className} ${device}`}>
            {data.map((item, idx) => {
                return (
                    <div key={idx} className='aco_wrap'>
                         <button type="button" class={`acco_head ${idx === Index && !data.done ? 'on' : ''}`} onClick={handleClick(idx)}>
                            {item.header}
                         </button>
                         <div class={`acco_body ${idx === Index && !data.done && 'on'}`}>
                            {item.body}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Accordion;