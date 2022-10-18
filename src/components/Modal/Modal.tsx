import './Modal.css';
export const Modal = () => {
	return (
		<div className='modalContainer'>
			<p className='modalParagraph'>Share</p>
			<ul className='iconList'>
				<li className='iconItem'>
					<img
						src='./Public/Images/Icons/icon-facebook.svg'
						alt=''
						className='icon'
					/>
				</li>
				<li className='iconItem'>
					<img
						src='./public/Images/Icons/icon-pinterest.svg'
						alt=''
						className='icon'
					/>
				</li>
				<li className='iconItem'>
					<img
						src='./public/Images/Icons/icon-twitter.svg'
						alt=''
						className='icon'
					/>
				</li>
			</ul>
		</div>
	);
};
