import { Button } from '../../../components/Button/Button'
import { ButtonLink } from '../../../components/Button/ButtonLink'

export const CardNav = () => {
    return (
        <nav className='card__navbar'>
			<ButtonLink value='Index' link='/' />
			<ButtonLink value='Audit projects' link='/' />
			<ButtonLink value='About' link='/about' />
			<Button
				value='Connect wallet' 
				as='button'
				otherProps={{
					onClick: () => {console.log('milady?')}
				}}
			/>
		</nav>
    )
}
