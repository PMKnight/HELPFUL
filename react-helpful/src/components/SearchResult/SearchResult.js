import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = ({ random, result }) => {
	if (result) {
		console.log(result);
		return (
			<div>
				<Link to='/'>
					<button>Back Home</button>
				</Link>
				<ul>
					{result.slips.map((results) => {
						return <li>{results.advice}</li>;
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
			<h2>{random.slip.advice}</h2>
		</div>
	);
};

// }

export default SearchResult;
