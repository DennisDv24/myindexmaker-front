import { DiamondLink } from './DiamondLink/DiamondLink';

import './about.css';
import { DiamondContainer } from './DiamondContainer/DiamondContainer';

export const AboutPage = () => {
	return (
		<div className='about'>
			<section className='about__section'>
				<DiamondContainer />
			</section>
			<section className='about__section'>
				<div className='links'>
					<DiamondLink label='WhitePaper' href='' />
					<DiamondLink label='Contracts' href='' />
					<DiamondLink label='Milady' href='' />
				</div>
			</section>
		</div>
	)
}
