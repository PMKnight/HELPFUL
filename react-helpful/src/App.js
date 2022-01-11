import './App.css';
// import HelpfulAdvice from './components/HelpfulAdvice/HelpfulAdvice';

import { useState } from 'react';
import HelpfulSearch from './components/HelpfulSearch/HelpfulSearch.js';
import Random from './components/Random/Random';
import SearchResult from './components/SearchResult/SearchResult';
import { Routes, Route } from 'react-router-dom';

function App() {
	const [random, setRandom] = useState(null);

	const [result, setResult] = useState(null);
	return (
		<main className='content-app'>
			<h1 className='Helpful'>Helpful</h1>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<HelpfulSearch setResult={setResult} />
							<Random setRandom={setRandom} />
						</>
					}
				/>
				<Route
					path='/results'
					element={<SearchResult random={random} result={result} />}
				/>
			</Routes>
		</main>
	);
}

export default App;
