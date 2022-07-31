import { Home } from './pages/home/Home';
import { AboutPage } from './pages/about/About';

import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

import './App.css';

function App() {
	return (
		<div className="container">
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<AboutPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}


export default App;
