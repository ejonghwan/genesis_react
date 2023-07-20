
import gallery_video from "../../assets/images/main/tac.mp4"
import youtube_video from "../../assets/images/main/yout.mp4"
import member_video from "../../assets/images/main/yout.mp4"
import contact_video from "../../assets/images/main/conc.mp4"
import comm_video from "../../assets/images/main/comm.mp4"


const Visual = ({ name }) => {

    return (
        <article className="g_inner full sub_page">
            <section className="sub_visual">
                <h2 className="sub_visual_title">GENESIS {name.toUpperCase()}</h2>
                <figure className="main_visual_slide_video">
                    <video preload="" src={
                        name === 'gallery' ? gallery_video :
                        name === 'youtube' ? youtube_video :
                        name === 'member' ? member_video :
                        name === 'community' ? comm_video :
                        name === 'contact' ? contact_video : null
                    } autoPlay muted loop playsInline></video>
                </figure>
            </section>
        </article>
    )
}

export default Visual;

