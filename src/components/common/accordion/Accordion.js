import React, { useEffect, useState } from 'react';


const Accordion = ({ data, className, device }) => {

        
   

    const [Active, setActive] = useState(false);
    const [Data, setData] = useState(data);
  
    const [Index, setIndex] = useState(false);
    const handleClick = idx => e => {
        // console.log(idx, Index, Active);
        // idx === Index && e.target.classList.remove('on')
        setIndex(idx);
    };



    const dd = [
        {id:0, name: 'a', age:1, done: false },
        {id:1, name: 'b', age:2, done: false },
        {id:2, name: 'c', age:3, done: false },
        {id:3, name: 'd', age:4, done: false },
        {id:4, name: 'e', age:5, done: false },
    ]
    const [ddd, setddd] = useState(dd);
    const handleTest = n => {
        return () => {
            // ddd.map((item, idx) => {
            //     if(item.id === n ) {
            //         // console.log(item.id, n, item)
            //         setddd({...item, done: "true" })
            //     }
            // })
            const newa = ddd.map((item, idx) => item.id === n ? {...item, done: !item.done } : item );
            setddd(newa)
        }
    }

    return (

        // <div>
            
        //     {ddd.map((item, idx) => {
        //         return (
        //             <button className={`wrap ${item.done && "select"}`} onClick={handleTest(idx)} style={{color:"red"}}>
        //                 <div>id: {item.id}</div>
        //                 <div>name: {item.name}</div>
        //                 <div>age: {item.age}</div>
        //                 <div>d: {item.done}</div>
        //             </button>
        //         )
        //     })}
        // </div>

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