import { Fragment, lazy, Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//common
import Footer from './components/common/Footer';
import Header from './components/common/Header';

import Main from './pages/Main';
import Loading from './components/common/loading/Loading';
import './scss/style.scss';

import { fetchYoutube } from './redux/youtubeSlice';
import { fetchFlickr } from './redux/flickrSlice';

const Contact = lazy(() => import('./pages/Contact'));
const Community = lazy(() => import('./pages/Community'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Youtube = lazy(() => import('./pages/Youtube'));



const App = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchYoutube());
		dispatch(fetchFlickr({ type: 'user', user: '164021883@N04' }));
	}, [dispatch]);

	return (
		<Fragment>	

			<Switch>
				{/* <Route exact path='/' component={Main} /> */}
				<Route exact path='/' render={() => <Main />} /> 
				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>

			<Suspense fallback={<Loading />}>
				<Route path='/gallery' component={Gallery} />
				<Route path='/youtube' component={Youtube} />
				<Route path='/contact' component={Contact} />
				<Route path='/community' component={Community} />
			</Suspense>
			<Footer />
			
			{/* <AllMenu target={allMenu} navRef={navRef} /> */}
		</Fragment>
	);
}

export default App;
