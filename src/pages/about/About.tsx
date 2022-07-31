import { Link } from '../../components/Link/Link';

import './about.css';

export const AboutPage = () => {
	return (
		<div className='about'>
			<section className='about__section'>
				<Link link='/'>
					<h1>MyIndex Maker</h1>
				</Link>
				<p>
					MyIndex Maker is a community driven
					Remilia derivatives gallery. The list,
					featured collections and scores are determined
					by TheIndex DAO, so Milady has full control
					over the lists.
				</p>
			</section>
			<section className='about__section'>
				<div className='Links'>
					<div>
						<span>
							Whitepaper
						</span>
					</div>
					<div>
						<span>
							Contracts
						</span>
					</div>
					<div>
						<span>
							Milady
						</span>
					</div>
				</div>
			</section>
		</div>
	)
}
