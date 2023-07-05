import { useState, useEffect } from "react";
import TabHead from './TabHead';
import TabBody from './TabBody';



const Tab = ({ tabHead, tabBody, data, className }) => {

    const [Data, setData] = useState(data)
    const [Index, setIndex] = useState(0);

    console.log('tab?', Index)

    

    useEffect(() => {
        // console.log(data)
    }, [])
    

    return (
        <article className={className}>
            <div className="tab_wrap">
                <TabHead heads={tabHead} setIndex={setIndex}/>
                <TabBody data={data} Index={Index}>
                    {tabBody}
                </TabBody>
            </div>
        </article>
    )
}

export default Tab;