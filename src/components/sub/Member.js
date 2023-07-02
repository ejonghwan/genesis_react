import { Fragment } from 'react';
import Layout from '../common/Layout';
import Visual from './Visual';

const Member = () => {
	return (
		<Fragment>
			<Visual name={'Member'} />
			<Layout name={'Member'}>
				Member
			</Layout>
		</Fragment>
	)
}

export default Member;
