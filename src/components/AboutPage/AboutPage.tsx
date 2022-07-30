
import aboutPageStyle from './AboutPage.module.css';

export const AboutPage = () => {
	return (
		<>
		<div className={aboutPageStyle.CenteredContent}>
			<div className={aboutPageStyle.Content}>
				<a href='/'>
					<h1>MyIndex Maker</h1>
				</a>
				<p>
					MyIndex Maker is a community driven 
					Remilia derivatives gallery. The list,
					featured collections and scores are determined
					by TheIndex DAO, so Milady has full control
					over the lists.
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
