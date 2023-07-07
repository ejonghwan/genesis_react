import { forwardRef, useState, useImperativeHandle, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return { 
			open: (target) => () => { 

				if(target && target.classList.contains('on')) {
					target.classList.remove('on'); 
					setOpen(false);
				} else if(target && !target.classList.contains('on')){
					target.classList.add('on'); 
					setOpen(true);
				}
				setOpen(true);
			 } 
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
			document.body.classList.add('popop_active');
		}
		if(Open && props.type === 'allmenu') {
			document.body.classList.add(props.type);
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
				<motion.aaside 
					className={`popup ${props.type}`} 
					initial={{ opacity: 0, transform: "translateY(-300px)" }} 
					animate={{opacity: 1, transition: { duration: 0.2, }, transform: "translateY(0px)", }} 
					exit={{ opacity: 0, transition: { delay: 0 }, transform: "translateY(-300px)" }}
				>
					{props.children}
					<button className='popup_close' onClick={popClose}>
						<span style={{color: "red"}}>close</span>
					</button>
				</motion.aaside>
			)}
		</AnimatePresence>
	);
});

export default Modal;
