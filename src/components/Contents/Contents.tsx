
import { FC } from 'react';
import { MainNav } from '../MainNav/MainNav';
import contentsStyle from './Contents.module.css';
import { DerivCollections } from '../DerivCollections/DerivCollections';

export const Contents: FC = () => {
	return (
		<div className={contentsStyle.Content}>
			<div className={contentsStyle.MainHeading}>
				<h1>
					MyIndex Maker
				</h1>
				<h2>
					Milady and Remilia derived collections
				</h2>
			</div>
			<MainNav />
			<DerivCollections />
		</div>
	)
}
