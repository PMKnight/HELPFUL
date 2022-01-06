import React, { useEffect, useState } from 'react';

function HelpfulSearch(props) {
	const [search, setSearch] = useState('');

	const searchParams = {
		total_results: 1,
		query: null,
		slips: [{ slips_id: null, advice: '' }],
		api: 'https://api.adviceslip.com/advice/search/{query}',
		endpoint: '-search',
	};

	useEffect(() => {
		beHelpful();
	}, []);
	function beHelpful() {
		const search = '';

		const url = `${searchParams.api}${searchParams.endpoint}${searchParams.slips.advice}${search}${searchParams.query}`;

		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				setSearch(json);
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

	return (
		<form onSubmit={handleSubmit} className='helpful-form'>
			<input
				placeholder='keyword'
				type='text'
				name='search'
				required
				onChange={handleChange}
				value={search}
			/>
			<button type='submit'>Get Help</button>
		</form>
	);
}

export default HelpfulSearch;
