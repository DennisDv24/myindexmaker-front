import { FC } from 'react';
import { Button } from '../../../components/Button/Button'
import { ButtonLink } from '../../../components/Button/ButtonLink'

import './MainNav.css';

export const MainNav: FC = () => {
	return (
		<nav className='nav-container'>
			<ButtonLink value='Index' link='/' />
			<ButtonLink value='Audit projects'  link='/' />
			<ButtonLink value='About' link='/about' />
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
