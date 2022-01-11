import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = ({ random, result }) => {
	if (result) {
		return (
			<div className='results'>
				<Link to='/'>
					<button className='button'>Back Home</button>
				</Link>
				<ul className='list-items'>
					{result.slips.map((results) => {
						return <li key={results.slip_id}>{results.advice}</li>;
					})}
				</ul>
			</div>
		);
	}

	return (
		<div>
			<Link to='/'>
				<button>Back Home</button>
			</Link>
			<h2 className='random'>{random.slip.advice}</h2>
		</div>
	);
};

// }

export default SearchResult;
