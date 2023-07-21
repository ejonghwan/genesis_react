import React, { Fragment, useEffect } from 'react';

const Showroom = ({ data, setTargetLatLng }) => {

    const handleMapInfoClick = info => setTargetLatLng(info)
    
    return (
        
        <div>
            {data[0].items.map((item, idx) => {
                return (
                    <Fragment key={idx}>
                        <strong className="info_gu">{item.name}</strong>
                        <div>
                            {item.info.map((info, k) => {
                                return (
                                    <Fragment key={k}>
                                        <div className="info_type">{info.type}</div>
                                        <button 
                                            type="button" 
                                            className="map_move arrow_btn black"
                                            onClick={() => handleMapInfoClick({ lat: info.letlong.lat, long: info.letlong.long })}
                                        >{info.point}</button>
                                        <div className="info_add">{info.address}</div>
                                        <div className="info_tel"><a href={`tel:${info.tel}`} title="매장 전화걸기">{info.tel}</a></div>
                                        <ul className="cars">
                                            {info.car.map(car => <li>{car}</li> )}
                                        </ul>
                                    </Fragment>
                                )
                            } )}
                        </div>
                    </Fragment>
                )
            })}
        </div>
       
    );
};

export default Showroom;