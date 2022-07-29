
import navstyle from './MainNav.module.css' ;

export const MainNav = () => {
	return (
		<nav className={navstyle.MainNav}>
			<button>Index</button>
			<button>Audit projects</button>
			<button>About</button>
			<button>Connect wallet</button>
		</nav>
	);
}
