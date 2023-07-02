import { Fragment } from 'react';
import Layout from '../common/Layout';
import Visual from './Visual';


const Gallery = () => {
	return (
		<Fragment>
			<Visual name={'Gallery'} />
			<Layout name={'Gallery'}>Gallery</Layout>
		</Fragment>
	)
}

export default Gallery;
