import Header from '../components/common/Header';
import Visual from '../components/main/visual/Visual';
import CarVisual from '../components/main/carVisual/CarVisual';
import OuterDesign from '../components/main/OuterDesign';
import Events from '../components/main/Events';
import InnerDesign from '../components/main/InnerDesign';
import SpaceRoad from '../components/main/SpaceRoad';
import Contents from '../components/main/Contents';


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
		</main>
	);
}

export default Main;