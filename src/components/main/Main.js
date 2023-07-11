import React, { useState } from 'react';
import Header from '../common/Header';
import Visual from './Visual';
import CarVisual from './carVisual/CarVisual';
import OuterDesign from './OuterDesign';
import Events from './Events';
import InnerDesign from './InnerDesign';
import SpaceRoad from './SpaceRoad';
import Contents from './Contents';


import News from './News';
import Pics from './Pics';
import Vids from './Vids';
import Banner from './Banner';
import Btns from './Btns';

function Main({  }) {

	const [Scrolled, setScrolled] = useState(0);
	const [Pos, setPos] = useState(0);

	return (
		<main>
			<Header type={'main'}/>
			<Visual />
			<CarVisual />
			<OuterDesign />
			<Events />
			<InnerDesign />
			<SpaceRoad />
			<Contents />


			{/* <News /> */}
			{/* <Pics Scrolled={Scrolled} Pos={Pos}/> */}
			{/* <Vids /> */}
			{/* <Banner /> */}
			{/* <Btns setScrolled={setScrolled} setPos={setPos}/> */}
		</main>
	);
}

export default Main;