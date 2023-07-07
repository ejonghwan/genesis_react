import React, { Fragment, useEffect } from 'react';

const Showroom = ({ data }) => {


    useEffect(() => {
        //  console.log(data)
    }, [])
   

    return (
        
        <div>
            {data[0].items.map(item => {
                return (
                    <Fragment>
                        <strong class="info_gu">{item.name}</strong>
                        <div>
                            {item.info.map(info => {
                                return (
                                    <Fragment>
                                        <div class="info_type">{info.type}</div>
                                        <button type="button" class="map_move arrow_btn black"
                                            data-lat="${info.letlong.lat}"
                                            data-long="${info.letlong.long}"
                                        >{info.point}</button>
                                        <div class="info_add">{info.address}</div>
                                        <div class="info_tel"><a href="tel:${info.tel}" title="매장 전화걸기">{info.tel}</a></div>
                                        <ul class="cars">
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