import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
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
