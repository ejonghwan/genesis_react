import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';


import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Visual from './components/main/Visual';
import Community from './components/sub/Community';
import Contact from './components/sub/Contact';
import Department from './components/sub/Department';
import Gallery from './components/sub/Gallery';
import Member from './components/sub/Member';
import Youtube from './components/sub/Youtube';


import Pics from './components/main/Pics';
import Vids from './components/main/Vids';
import Banner from './components/main/Banner';

import './scss/style.scss';

import Test from './Test'
import Test2T from './Test2T'

function App() {
	return (
		<Fragment>
			<Switch>
				{/* Swich로 exact로 위에있는것을 제외 하고 모드 아래꺼로 적용 */}
				<Route exact path="/">
					<Header type={'main'}/>
					<Visual />
					<Pics />
					<Vids />
					<Banner />
				</Route>

				<Route path="/">
					<Header type={'sub'}/>
				</Route>
			</Switch>

			<Route path="/department">
					<Department />
				</Route>
			<Route path="/gallery">
				<Gallery />
			</Route>
			<Route path="/youtube">
				<Youtube />
			</Route>
			<Route path="/contact">
				<Contact />
			</Route>
			<Route path="/member">
				<Member />
			</Route>
			<Route path="/community">
				<Community />
			</Route>
			
		

			<Footer />


			<br /><br /><br /><br /><br /><br />
			
			{/* <Test /> */}
			{/* <Test2T /> */}
		</Fragment>
	);
}

export default App;
