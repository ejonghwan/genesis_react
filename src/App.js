import { Fragment, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

//common
import Footer from './components/common/Footer';
import Header from './components/common/Header';

import Main from './pages/Main';
import Loading from './components/common/loading/Loading';
import './scss/style.scss';

const Contact = lazy(() => import('./pages/Contact'));
const Community = lazy(() => import('./pages/Community'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Youtube = lazy(() => import('./pages/Youtube'));



const App = () => {

	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
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

			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default App;
