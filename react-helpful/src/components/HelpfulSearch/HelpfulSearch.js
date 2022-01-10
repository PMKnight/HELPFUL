import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HelpfulSearch(props) {
	const [search, setSearch] = useState('');
	let navigate = useNavigate();
	const searchParams = {
		total_results: 1,
		query: null,
		slips: [{ slips_id: null, advice: '' }],
		api: 'https://api.adviceslip.com/advice/search/',
		// endpoint: '-search',
	};

	useEffect(() => {
		props.setResult(null);
	}, []);
	function beHelpful() {
		const url = `${searchParams.api}${search}`;

		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				props.setResult(json);
				navigate('/results');
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function handleSubmit(event) {
		event.preventDefault();
		beHelpful();
	}

	function handleChange(event) {
		setSearch(event.target.value);
	}
	// if (!search) {
	// 	return <h2>Limit search to key words</h2>;
	// } else {
	return (
		<main className='container'>
			<form onSubmit={handleSubmit} className='helpful-form'>
				<input
					className='input'
					placeholder='keyword'
					type='text'
					name='search'
					required
					onChange={handleChange}
					value={search}
				/>

				<button type='submit'>Get Help</button>
			</form>
		</main>
	);
}
// }

export default HelpfulSearch;
