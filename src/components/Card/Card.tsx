import { Mainimage } from '../MainImage/MainImage';
import { TextContent } from '../TextContent/TextContent';
import './card.css';
export const Card = () => {
	return (
		<div className='content'>
			
			<article className='cardContainer'>
				<Mainimage />
				<div className='cardContent'>
					<TextContent />
				</div>
			</article>
		</div>
	);
};
