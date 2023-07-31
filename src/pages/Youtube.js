import { useState, useRef, Fragment } from 'react';
import { useYoutubeQuery } from '../hooks/useYoutubeQuery';

import Layout from '../components/common/Layout';
import Modal from '../components/common/Modal';
import Loading from '../components/common/loading/Loading_inner';
import Visual from '../components/sub/Visual';



const Youtube = () => {

	const modal = useRef(null);
	const [Index, setIndex] = useState(0);
	const { data: youtube, isSuccess, isLoading } = useYoutubeQuery();

	const handlePopOpen = idx => e => {
		modal.current.open()();
		setIndex(idx);
	}

	return (
		<Fragment>
			<Visual name={'youtube'} />
			<Layout name={'youtube sub_page'} >
			{isLoading ? (
				<Loading />
			) : (
				<div className="g_inner">
					<article className="you_wrap">
						<section className="you_head">
							<strong className="you_head_tit">제네시스</strong>
							<p className="sub_txt">
								<a href="" role="button">@GenesisWorldwide</a>
								<span>구독자 13.6만명</span>
								<span>동영상 502개</span>
							</p>
							<p className="sub_txt">
							최고 수준의 성능, 디자인, 안전과 혁신으로 지속 가능한 미래를 그리는 글로벌 럭셔리 브랜드 제네시스(GENESIS) 공식 계정입니다. 높은 품격과 안목을 가진 사람들을 위한 최상의 자동차와 서비스를 만들어 내고자 합니다.</p>
							<br /><br />
						</section>
						<section className="content youtube">
							<div className="inner">
							<div className="wrap">
								
								{youtube?.map((vid, idx) => {
									return (
										<article key={idx}>
											<button type="button" className='pic img_box' onClick={handlePopOpen(idx)}>
												<img src={vid.snippet.thumbnails.standard.url} alt={vid.snippet.title} />
											</button>
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
			)}
			</Layout>
			<Modal ref={modal} type={"popup_full"}>
				<iframe
					title={youtube?.map(item => item)[Index]?.id} 
					src={`https://www.youtube.com/embed/${youtube?.map(item => item)[Index]?.snippet.resourceId.videoId}`}
				></iframe>
			</Modal>
		</Fragment>
	);
}

export default Youtube;
