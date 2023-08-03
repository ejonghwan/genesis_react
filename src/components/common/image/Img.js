
import { Fragment } from 'react'
import { useEffect, useRef } from 'react'


const Img = ({ webpSrc, imageSrc, alt, className, width, height }) => {

    const imgRef = useRef(null) 

    useEffect(() => {
        const options = {}
        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {

                    const target = entry.target;
                    const previousSibling = target.previousSibling;

                    // console.log('is inter', entry.target.dataset.src, previousSibling);
                    
                    target.src = target.dataset.src;
                    previousSibling.srcset = previousSibling.dataset.srcset;

                    observer.unobserve(target)
                }
            })
        }
        const observer = new IntersectionObserver(callback, options)
        observer.observe(imgRef.current)

    }, [])

    return (
        <Fragment>
            <picture>
                <source data-srcset={webpSrc} type="image/webp" />
                <img data-src={imageSrc} ref={imgRef} alt={alt} className={className} width={width} height={height}/>
            </picture>
        </Fragment>
    )
    
}

export default Img;

