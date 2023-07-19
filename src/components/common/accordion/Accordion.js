import React, { useEffect, useState } from 'react';

const Accordion = ({ data, className, device }) => {
    const [Index, setIndex] = useState(false);
    const handleClick = idx => e => {
        setIndex(idx);
    };

    return (
        <div className={`${className} ${device}`}>
            {data.map((item, idx) => {
                return (
                    <div key={idx} className='aco_wrap'>
                         <button type="button" className={`acco_head ${idx === Index && !data.done ? 'on' : ''}`} onClick={handleClick(idx)}>
                            {item.header}
                         </button>
                         <div className={`acco_body ${idx === Index && !data.done && 'on'}`}>
                            {item.body}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Accordion;