import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import './AuthorInfo.css';
export const AuthorInfo = () => {
	const [render, setIsRender] = useState(false);
	return (
		<footer
			className='footer'
			style={{
				backgroundColor: render ? 'hsl(217, 19%, 35%)' : 'hsl(210, 46%, 95%)',
				paddingTop:render?'2rem':'0'
			}}
		>
			<div className='authorInfoContainer'>
				<div
					className='authorDescription'
					style={{ display: render ? 'none' : 'flex' }}
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
				<Modal render={render} />
				<div
					className='shareButtonContainer'
					onClick={() => {
						setIsRender((display) => !display);
					}}
				>
					<img
						src='./Public/Images/Icons/icon-share.svg'
						className='shareButton'
					></img>
				</div>
			</div>
		</footer>
	);
};
