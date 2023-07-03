import { forwardRef, useState, useImperativeHandle, useEffect } from 'react';

const Modal = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return { open: () => setOpen(true) };
	});

	useEffect(() => {
		if(Open) {
			document.body.style.overflow = 'hidden';
			document.body.classList.add('popop_active');
		}

		if(Open && props.type === 'allmenu') {
			document.body.classList.add(props.type);
		}

		return () => {
			document.body.style.overflow = 'unset';
			document.body.classList.remove('popop_active');
			document.body.classList.remove(props.type);
		}
	}, [Open])

	return (
		<>
			{Open && (
				<aside className='modal' ref={ref}>
					<div className='con'>{props.children}</div>
					<span className='close' onClick={() => setOpen(false)}>
						close
					</span>
				</aside>
			)}
		</>
	);
});

export default Modal;
