import React, { useEffect } from 'react';

const AccHeader = ({ children }) => {

    return (
        <button type="button" class="acco_head">
            {children}
        </button>
    );
};

export default AccHeader;