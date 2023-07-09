import React, { Fragment, useRef, useEffect, useState } from 'react';

import Layout from '../common/Layout';
import Visual from './Visual';
import Maps from './Maps';
import Email from './Email';
import { MapData } from '../common/data/MapData';


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