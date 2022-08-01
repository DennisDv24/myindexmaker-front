import aboutPageStyle from './AboutPage.module.css';

import { Link } from '../Link/Link';

export const AboutPage = () => {
	return (
		<>
		<div className={aboutPageStyle.CenteredContent}>
			<div className={aboutPageStyle.Content}>
				<Link link='/'>
					<h1>MyIndex Maker</h1>
				</Link>
				<p>
					MyIndex Maker is a community driven 
					Remilia derivatives gallery. The list,
					featured collections, and rank are determined
					by TheIndex DAO.
					<br/>
					<br/>
					All Remilia/Milady derivatives are welcome to
					submit proposals to be listed the MyIndex Maker index.
				</p>
			</div>
		</div>
		<section className={aboutPageStyle.linksSection}>
			<div className={aboutPageStyle.Links}>
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
		</>
	)
}
