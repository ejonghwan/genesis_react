import { useState } from "react";
import TabHead from './TabHead';
import TabBody from './TabBody';



const Tab = ({ tabHead, tabBody, data, className }) => {
    const [Index, setIndex] = useState(0);
    return (
        <article className={className}>
            <div className="tab_wrap">
                <TabHead heads={tabHead} setIndex={setIndex} Index={Index} />
                <TabBody data={data} Index={Index}>
                    {tabBody}
                </TabBody>
            </div>
        </article>
    )
}

export default Tab;