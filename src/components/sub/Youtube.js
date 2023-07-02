import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState, useRef, Fragment } from 'react';
import Modal from '../common/Modal';
import Visual from './Visual';

function Youtube() {
	const modal = useRef(null);
	const [Vids, setVids] = useState([]);
	const [Index, setIndex] = useState(0);

	const fetchYoutube = async () => {
		const key = 'AIzaSyChzicx_fRjO6YQhLL-C8tDxCq0E46sxtk'
        const list = 'PLQytOX-GQNjpnWvXUwth7PTdoEA2kZX16'
		const num = 10;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${list}&key=${key}&maxResults=${num}`;
		const result = await axios.get(url);
		setVids(result.data.items);
	};

	useEffect(() => fetchYoutube(), []);

	return (
		<Fragment>
			<Visual name={'Youtube'} />
			<Layout name={'Youtube'} >


				<div class="g_inner">
					<article class="you_wrap">
						<section class="you_head">
							<strong class="you_head_tit">제네시스</strong>
							<p class="sub_txt">
								<a href="" role="button">@GenesisWorldwide</a>
								<span>구독자 13.6만명</span>
								<span>동영상 502개</span>
							</p>
							<p class="sub_txt">
							최고 수준의 성능, 디자인, 안전과 혁신으로 지속 가능한 미래를 그리는 글로벌 럭셔리 브랜드 제네시스(GENESIS) 공식 계정입니다. 높은 품격과 안목을 가진 사람들을 위한 최상의 자동차와 서비스를 만들어 내고자 합니다.</p>
							<br /><br />
						</section>
						<section class="content youtube">
							<div class="inner">
							<div class="wrap">
								
								{Vids.map((vid, idx) => {
									return (
										<article key={idx}>
											<div
												className='pic img_box'
												onClick={() => {
													modal.current.open();
													//썸네일 클릭시 현재 클릭한 요소의 순번값으로 Index State값 변경
													setIndex(idx);
												}}
											>
												<img src={vid.snippet.thumbnails.standard.url} alt={vid.snippet.title} />
											</div>
											<div className='txt_box'>
												<h2>{vid.snippet.title.length > 50 ? vid.snippet.title.substr(0, 50) + '...' : vid.snippet.title}</h2>
												<div className='txt'>
													<p>{vid.snippet.description.length > 200 ? vid.snippet.description.substr(0, 200) + '...' : vid.snippet.description}</p>
													<span>{vid.snippet.publishedAt.split('T')[0].split('-').join('.')}</span>
												</div>
											</div>
										</article>
									);
								})}
							</div>
							</div>
						</section>
					</article>
				</div>

			</Layout>

			<Modal ref={modal}>
				{/* 첫 렌더링 싸이클에서는 Vids[0]의 객체값 자체가 없으므로 없는 요소의 id값 호출 오류-> 옵셔널체이닝으로 해결 */}
				<iframe title={Vids[Index]?.id} src={`https://www.youtube.com/embed/${Vids[Index]?.snippet.resourceId.videoId}`}></iframe>
			</Modal>
		</Fragment>
	);
}

export default Youtube;
