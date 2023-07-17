import React, { Fragment } from 'react';

import Layout from '../components/common/Layout';
import { MapData } from '../components/common/data/MapData';
import Visual from '../components/sub/Visual';
import Maps from '../components/sub/Maps';
import Email from '../components/sub/Email';


const Contact = () => {
	return (
		<Fragment>
			<Visual name={'contact'} />
			<Layout name={'contact sub_page'}>
			
				<Maps mapData={MapData}/>
				<Email />
				
			</Layout>
		</Fragment>
	);
}

export default Contact;