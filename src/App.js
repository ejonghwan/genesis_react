import { Fragment, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

//common
import Footer from './components/common/Footer';
import Header from './components/common/Header';


// import Main from './pages/Main';
// import Contact from './pages/Contact';
// import Community from './pages/Community';
// import Gallery from './pages/Gallery';
// import Member from './pages/Member';
// import Youtube from './pages/Youtube';
import Loading from './components/common/loading/Loading';
import './scss/style.scss';
import Test from './Test'

const Main = lazy(() => import('./pages/Main'));
const Contact = lazy(() => import('./pages/Contact'));
const Community = lazy(() => import('./pages/Community'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Youtube = lazy(() => import('./pages/Youtube'));



const App = () => {

	return (
		<Fragment>	
			<Switch>
				{/* <Route exact path='/' component={Main} /> */}
			
				<Suspense fallback={Loading}>
					<Route exact path='/' render={() => <Main />} /> 
				</Suspense>
				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>

			<Suspense fallback={Loading}>
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
