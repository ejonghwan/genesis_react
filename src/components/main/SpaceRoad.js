import { useEffect, useRef } from 'react';
import space from '../../assets/images/main/genesis-motorshow-guangzhou-ectrified-gv70-1920x960.jpg'
import load from '../../assets/images/main/genesis-kr-main-genesis-events-17-desktop-1920x960-ko-2.jpg'

const SpaceRoad = () => {

    const spaceRef = useRef(null);
    const loadRef = useRef(null);

    useEffect(() => {
        const options = {}
        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const target = entry.target;
                    target.style.backgroundImage = `url(${target.dataset.src})`
                    observer.unobserve(target)
                }
            })
        }
        const observer = new IntersectionObserver(callback, options)
        const observer2 = new IntersectionObserver(callback, options)
        observer.observe(spaceRef.current)
        observer2.observe(loadRef.current)

    }, [])

    return (
        <article className="g_inner full">
        <div className="g_inner btm_0">
            <h2 className="gl_title">Genesis space & Road trip</h2>
        </div>
        <div className="load_wrap">
            <div className="left" ref={spaceRef} data-src={space}>
                <strong>스페이스</strong>
                <p>제네시스의 디자인과 고유한 감각을 반영한 현대적 공간으로 여러분을 초대합니다. 제네시스에 관한 다양한 체험으로 당신만의 제네시스를 찾는 여정을 지원합니다.</p>
                <a href="https://www.genesis.com/kr/ko/experience/space/space-overview.html" role="button" className="arrow_btn link" target="_blank" title="새창">자세히보기</a>
            </div>
            <div className="right" ref={loadRef} data-src={load}>
                <strong>로드트립</strong>
                <p>제네시스와 내셔널지오그래픽 트래블러와 함께하는 서사적 여행, 제네시스 로드트립을 통해 자세한 정보를 확인하세요.</p>
                <a href="https://www.genesis.com/kr/ko/genesis/roadtrip/roadtrip-overview.html" role="button" className="arrow_btn link" target="_blank" title="새창">자세히보기</a>
            </div>
        </div>
    </article>
    )
}

export default SpaceRoad;