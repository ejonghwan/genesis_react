import { useEffect, useRef } from "react";
import img from '../../assets/images/main/genesis-ev-service-package-01-pr-center.jpg'

const Events = () => {

    const imgRef = useRef(null) 
    

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
        observer.observe(imgRef.current)

    }, [])

    return (
        <div className="evt_banner" ref={imgRef} data-src={img}>
            <article className="g_inner">
                <h2 className="tit">Genesis Events</h2>
                <p className="txt">제네시스에서 진행중인 다양한 이벤트를 소개합니다.</p>
                <a href="https://www.genesis.com/kr/ko/support/genesis-events.html" role="button" className="arrow_btn link" target="_blank" title="새창">자세히보기</a>
            </article>
        </div>
    )
}

export default Events;