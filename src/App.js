import { Fragment, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';

//common
import Footer from './components/common/Footer';
import Header from './components/common/Header';

//sub
// import Community from './components/sub/Community';
// import Contact from './components/sub/Contact';
// import Gallery from './components/sub/Gallery';
// import Member from './components/sub/Member';
// import Youtube from './components/sub/Youtube';

import Main from './pages/Main';
import Contact from './pages/Contact';
import Community from './pages/Community';
import Gallery from './pages/Gallery';
import Member from './pages/Member';
import Youtube from './pages/Youtube';


import './scss/style.scss';


function App() {

	const menu = useRef(null)

	return (
		<Fragment>
			<Switch>
				{/* <Route exact path='/' component={Main} /> */}
				<Route exact path='/' render={() => <Main />} />
				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>

			<Route path='/gallery' component={Gallery} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/contact' component={Contact} />
			<Route path='/member' component={Member} />
			<Route path='/community' component={Community} />
			<Footer />
			
			{/* <AllMenu target={allMenu} navRef={navRef} /> */}
		</Fragment>
	);
}

export default App;
