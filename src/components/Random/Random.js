import { useNavigate } from 'react-router-dom';

function Random(props) {
	let navigate = useNavigate();

	const optionSearch = {
		api: 'https://api.adviceslip.com/advice',
		slip_id: 0,
		advice: '',
	};

	function getRandom() {
		const url = `${optionSearch.api}`;

		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				props.setRandom(json);
				navigate('/results');
			})
			.catch((err) => {
				console.log(err);
			});
	}
	return (
		<div>
			<button className='random-button' onClick={getRandom}>
				Random Advice
			</button>
		</div>
	);
}

export default Random;
