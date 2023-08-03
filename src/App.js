import { Fragment, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import HeadMetaTag from '../src/components/common/HeadMetaTag';

//common
import Footer from './components/common/Footer';
import Header from './components/common/Header';

import Main from './pages/Main';
import Loading from './components/common/loading/Loading';
import './scss/style.scss';
import Test from './Test'

const Contact = lazy(() => import('./pages/Contact'));
const Community = lazy(() => import('./pages/Community'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Youtube = lazy(() => import('./pages/Youtube'));


const App = () => {

	const meta = {
		title: "제네시스(GENESIS) 공식 프로모션 웹사이트 | GENESIS Korea 제네시스(GENESIS) 공식 프로모션 웹사이트 | GENESIS Korea", 
		description: "역동적인 우아함과 진보된 기술을 바탕으로 럭셔리 자동차의 새로운 기준을 제시합니다. 세단, SUV, 전기차, 컨셉카 등 제네시스의 다양한 모델을 만나보세요. | 제네시스 공식 웹사이트 제네시스(GENESIS) 공식 웹사이트 | GENESIS Korea", 
		keywords: "세단, SUV, 전기차, 컨셉카 등 제네시스의 다양한 모델을 만나보세요. | 제네시스 공식 웹사이트 제네시스(GENESIS) 공식 웹사이트 | GENESIS Korea", 
		imgsrc: "https://www.genesis.com/content/dam/genesis-p2/kr/assets/utility/sns/genesis-kr-logo-social-1200x630-ko.jpg", 
		url: "https://ejonghwan.github.io/genesis_react/",
	}

	return (
		<Fragment>	
			<HeadMetaTag 
				title={meta.title} 
				description={meta.description}
				keywords={meta.keywords}
				imgsrc={meta.imgsrc}
				url={meta.url}
			/>
			<Switch>
				{/* <Route exact path='/' component={Main} /> */}
				<Route exact path='/' render={() => <Main />} /> 
				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>

			<Suspense fallback={<Loading />}>
				<Route path='/gallery' component={Gallery} />
				<Route path='/youtube' component={Youtube} />
				<Route path='/contact' component={Contact} />
				{/* <Route path='/member' component={Member} /> */}
				<Route path='/community' component={Community} />
				<Route path='/test/:userName' component={Test} />
			</Suspense>
			<Footer />
			
			{/* <AllMenu target={allMenu} navRef={navRef} /> */}
		</Fragment>
	);
}

export default App;
