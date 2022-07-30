
import navstyle from './MainNav.module.css' ;

export const MainNav = () => {
	return (
		<nav className={navstyle.MainNav}>
			<button>Index</button>
			<button>Audit projects</button>
			<a href="/about">
				<button>About</button>
			</a>
			<button>Connect wallet</button>
		</nav>
	);
}
