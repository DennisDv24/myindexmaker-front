import { FC } from 'react';
import { Button } from '../Button/Button'
import { ButtonLink } from '../Button/ButtonLink'

import './MainNav.css';

export const MainNav: FC = () => {
	return (
		<nav className='nav-container'>
			<ButtonLink value='Index' as='button' link='/' />
			<ButtonLink value='Proposals' as='button' link='/' />
			<ButtonLink value='About' as='button' link='/about' />
			<Button
				value='Connect Wallet' 
				as='button'
				otherProps={{
					onClick: () => {console.log('milady?')}
				}}
			/>
		</nav>
	);
}
