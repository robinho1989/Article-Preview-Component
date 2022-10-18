import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import './AuthorInfo.css';
export const AuthorInfo = () => {
	const [active, isActive] = useState(false);
	return (
		<footer
			className='footer'
			style={{
				backgroundColor: active ? 'hsl(217, 19%, 35%)' : 'hsl(210, 46%, 95%)',
				paddingTop: active ? '2rem' : '0',
			}}
		>
			<div className='authorInfoContainer'>
				<div
					className='authorDescription'
					style={{ display: active ? 'none' : 'flex' }}
				>
					<img
						src='./Public/Images/Pictures/avatar-michelle.jpg'
						alt='A picture of author'
						className='authorInfoImage'
					/>
					<div className='authorInfoData'>
						<p className='authorInfoName'>Michelle Appleton</p>
						<p className='authorInfoDate'> 28 Jun 2020</p>
					</div>
				</div>
				<Modal render={active} />
				<button
					className='shareButtonContainer'
					onClick={() => {
						isActive((display) => !display);
					}}
				>
					<img
						src='./Public/Images/Icons/icon-share.svg'
						className='shareButton'
					></img>
				</button>
			</div>
		</footer>
	);
};
