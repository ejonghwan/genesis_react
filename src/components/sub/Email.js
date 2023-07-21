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
            <h2 className="gl_title">문의하기</h2>
                <div className='form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='input_wrap'>
                            <label for="user_info_name"><strong>이름</strong></label>
                            <input type="text" name="name" for="user_info_name" />
                        </div>
                        <div className='input_wrap'>
                            <label for="user_info_email"><strong>메일</strong></label>
                            <input type="email" name="email" id="user_info_email" />
                        </div>
                        <div className='input_wrap'>
                            <label for="user_info_message"><strong>메시지</strong></label>
                            <textarea name="message" id="user_info_message"></textarea>
                        </div>
                        <div className='btn_wrap align_c'>
                            <button className='btn blue' type="submit" value="Send">문의 보내기</button>
                        </div>
                    </form>
                    {!Success && <p style={{ color: "red" }}>전송에 실패했습니다</p>}
                </div>
           </div>
        );
    };

export default Email;