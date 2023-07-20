import { forwardRef, useState, useImperativeHandle, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return { 
			open: (target) => () => { 
				setOpen(true);
			 }, 
			 close: (target) => () => {
				setOpen(false)
			 },
		};
	});

	const popClose = e => {
		document.body.style.overflow = 'unset';
		document.body.classList.remove('popop_active');
		document.body.classList.remove(props.type);
		setOpen(!Open)
	}

	useEffect(() => {
		if(Open) {
			document.body.style.overflow = 'hidden';
			document.body.classList.add('popop_active', props.type);
		}
		return () => {
			popClose();
		}
	}, [Open])

	return (
		// motion.Element  /  initial={}  /  animate={}  /  exit={}  
		// attr : x, y, rotate, scale
		<AnimatePresence>
			{Open && (
				<motion.aside 
					className={`popup ${props.type}`} 
					initial={{ opacity: 0, transform: "translateY(-100px)" }} 
					animate={{opacity: 1, transition: { duration: 0.2, }, transform: "translateY(0px)", }} 
					exit={{ opacity: 0, transition: { delay: 0 }, transform: "translateY(-100px)" }}
				>
					{props.children}
					<button className='popup_close' type='button' onClick={popClose}>
						<span>닫기</span>
					</button>
				</motion.aside>
			)}
		</AnimatePresence>
	);
});

export default Modal;
