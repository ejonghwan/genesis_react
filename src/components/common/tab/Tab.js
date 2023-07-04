import { useState, useEffect } from "react";
import TabHead from './TabHead';
import TabBody from './TabBody';



const Tab = ({ tabHead, tabbody, data, className }) => {

    const [Data, setData] = useState(data)



    useEffect(() => {
        console.log(data)
    }, [])
    

    return (
        <article className={className}>
            <div className="tab_wrap">
                <TabHead heads={tabHead} />
                <TabBody data={data} />
            </div>
        </article>
    )
}

export default Tab;