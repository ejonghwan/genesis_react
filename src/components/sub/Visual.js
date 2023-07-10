
import gallery_video from "../../assets/images/main/tac.mp4"
import youtube_video from "../../assets/images/main/yout.mp4"
import member_video from "../../assets/images/main/yout.mp4"
import contact_video from "../../assets/images/main/yout.mp4"


const Visual = ({ name }) => {

    return (
        <article className="g_inner full sub_page">
            <section className="sub_visual">
                <h2 className="sub_visual_title">GENESIS {name.toUpperCase()}</h2>
                <figure className="main_visual_slide_video">
                    <video preload="" src={
                        name === 'Gallery' ? gallery_video :
                        name === 'Youtube' ? youtube_video :
                        name === 'Member' ? member_video :
                        name === 'Contact' ? contact_video : null
                    } autoPlay muted loop playsInline></video>
                </figure>
            </section>
        </article>
    )
}

export default Visual;

