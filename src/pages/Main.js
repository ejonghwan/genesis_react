import Header from '../components/common/Header';
import Visual from '../components/main/Visual';
import CarVisual from '../components/main/carVisual/CarVisual';
import OuterDesign from '../components/main/OuterDesign';
import Events from '../components/main/Events';
import InnerDesign from '../components/main/InnerDesign';
import SpaceRoad from '../components/main/SpaceRoad';
import Contents from '../components/main/Contents';


// import News from './News';
// import Pics from './Pics';
// import Vids from './Vids';
// import Banner from './Banner';
// import Btns from './Btns';

const Main = () => {

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