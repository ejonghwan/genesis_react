import { forwardRef, useState, useImperativeHandle, useEffect } from 'react';

const Modal = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return { 
			open: (target) => () => { 
				if(target.classList.contains('on')) {
					target.classList.remove('on'); 
					setOpen(false);
				} else {
					target.classList.add('on'); 
					setOpen(true);
				}
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
		<>
			{Open && (
				<aside className={`modal ${props.type}`} ref={ref}>
					<div className='con'>{props.children}</div>
					<span className='close' onClick={popClose}>
						close
					</span>
				</aside>
			)}
		</>
	);
});

export default Modal;
