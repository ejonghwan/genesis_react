import React from 'react';

const Notice = ({ item }) => {
    return (
        <a href={item.link} role="button" class="noti" target="_blank" title="새창">{item.title}</a>
    );
};

export default Notice;