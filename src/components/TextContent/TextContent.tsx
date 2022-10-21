import { AuthorInfo } from './../AuthorInfo/AuthorInfo';
import './textContent.css';
export const TextContent = () => {
	return (
		<>
			
			<div className='textContentContainer'>
				<h1 className='textContentHeading'>
					Shift the overall look and feel by adding these wonderful touches to
					furniture in your home
				</h1>
				<p className='textContentParagraph'>
					Ever been in a room and felt like something was missing? Perhaps it
					felt slightly bare and uninviting. I’ve got some simple tips to help
					you make any room feel complete.
				</p>
			</div>
			<AuthorInfo />
		</>
	);
};
