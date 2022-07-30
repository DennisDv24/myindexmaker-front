
import React from 'react';
import bgImage from './resources/clouds.png';
import './App.css';

import { Contents } from './components/Contents/Contents';
import { AboutPage } from './components/AboutPage/AboutPage';

import { 
  	BrowserRouter,
  	Routes,
  	Route,
} from "react-router-dom";

function App() {
  	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Contents />}/>
					<Route path='/about' element={<AboutPage />}/>
				</Routes>
			</BrowserRouter>
    	</div>
  	);
}


export default App;
