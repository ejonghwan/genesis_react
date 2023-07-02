import Layout from '../common/Layout';
import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import Visual from './Visual';

function Department() {
	const [Members, setMembers] = useState([]);
	console.log(Members);

	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/members.json`).then((data) => {
			setMembers(data.data.members);
		});
	}, []);

	return (
		<Fragment>
			<Visual name={'Department'} />
			<Layout name={'Department'}>
				{Members.map((member, idx) => {
					return (
						<article key={idx}>
							<div className='pic'>
								<img src={`${process.env.PUBLIC_URL}/img/${member.pic}`} alt={member.name} />
								<img src={`${process.env.PUBLIC_URL}/img/${member.pic}`} alt={member.name} />
							</div>
							<h2>{member.name}</h2>
							<p>{member.position}</p>
						</article>
					);
				})}
			</Layout>
		</Fragment>
	);
}

export default Department;
