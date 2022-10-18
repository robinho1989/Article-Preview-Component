import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import './AuthorInfo.css';
export const AuthorInfo = () => {
	const [isActive, setIsActive] = useState(false);
	return (
		<footer className={isActive ? 'modalActive' : 'modalDisable'}>
			<div className='authorInfoContainer'>
				<div className={isActive ? 'displayNone' : 'authorDescription'}>
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
				{isActive&&<Modal/>}
			
				<button
					className='shareButtonContainer'
					onClick={() => {
						setIsActive((display) => !display);
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
