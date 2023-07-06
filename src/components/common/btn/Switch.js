import React, { Fragment } from 'react';

const Switch = ({ className, name, type, content, len }) => {

    console.log(className, name, type, content)

    return (
        <div class="btnSet">
            <fieldset>
                {new Array(len).map(_ => {
                    return (
                        <Fragment>
                            <input checked id={className} class={className} type={type} name={name}/>
                            <label for={className}>{content}</label>
                        </Fragment>
                    )
                })}
                
            </fieldset>
        </div>
    );
};

export default Switch;