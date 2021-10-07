import './App.css';
import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats';
import Input from './components/Input';
import { useEffect } from 'react';
import { getSecretWord } from './actions/Index';

function App() {
	// TODO: get props from shared state
	const success = false;
	const secretWord = 'party';
	const guessedWords = [];


	useEffect(() => {
		getSecretWord()
	}, [])
	return (
		<div className='container' data-test='component-app'>
			<h1>Jotto</h1>
			<Congrats success={success} />
			<Input success={success} secretWord={secretWord} />
			<GuessedWords guessedWords={guessedWords} />
			
		</div>
	);
}

export default App;
