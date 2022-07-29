
import { FC } from 'react';
import { MainNav } from '../MainNav/MainNav';
import contentsStyle from './Contents.module.css';

export const Contents: FC = () => {
	return (
		<div className={contentsStyle.Content}>
			<div className='MainHeading'>
				<h1>
					MyIndex Maker
				</h1>
				<h2>
					Milady and Remilia derived collections
				</h2>
			</div>
			<MainNav />
			<p>
			Consectetur molestias corporis optio possimus voluptate
			reiciendis Illum recusandae sequi quisquam quo nostrum? Maiores
			fuga inventore nesciunt amet dolor dicta quo! Nihil soluta error
			quaerat doloremque itaque omnis magnam Quo.
			</p>
		</div>
	)
}
