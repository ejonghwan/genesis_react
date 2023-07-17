import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Email = () => {

    const form = useRef();
    const [Success, setSuccess] = useState(true)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rq833zr', 'template_iav35ok', form.current, 'kqZyhq3UF7CqFUd-c')
        .then((result) => {
            setSuccess(true)
        }, (error) => {
            setSuccess(false)
            // console.log(error.text);
        });
    };

        return (
           <div className='g_inner'>
                <div className='form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="name" />
                        <label>Email</label>
                        <input type="email" name="email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
                    {!Success && <p style={{ color: "red" }}>전송에 실패했습니다</p>}
                </div>
           </div>
        );
    };

export default Email;