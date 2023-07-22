import React, { useRef, useState } from 'react'
import './App.css';

const App = () => {

	const inputRef = useRef(null);
	const resultRef = useRef(null);
	const [result, setResult] = useState(0);

	function Add(e) {
		e.preventDefault();
		setResult((result) => result + Number(inputRef.current.value));
	}
	function Minus(e) {
		e.preventDefault();
		setResult((result) => result - Number(inputRef.current.value));
	}
	function Times(e) {
		e.preventDefault();
		setResult((result) => result * Number(inputRef.current.value));
	}
	function Divide(e) {
		e.preventDefault();
		setResult((result) => result / Number(inputRef.current.value));
	}

	function resetInput(e) {
		e.preventDefault();
		inputRef.current.value = "";
	}

	function resetResult(e) {
		e.preventDefault();
		setResult(0);
	}


	return (
		<div className='app'>
			<form className="calculator__container">
				<h4>Calculator App</h4>
				<div className="calculator__box">
					<p ref={resultRef} className="screen">{result}</p>
					<input pattern="[0-9]" ref={inputRef} placeholder='your input' />
					<div className="resets__btn-wrapper">
						<button type='button' onClick={resetInput}>Reset Input</button>
						<button type='button' onClick={resetResult}>Reset Results</button>
					</div>
					<div className="btns__wrapper">
						<button type='button' onClick={Add}>Add</button>
						<button type='button' onClick={Divide}>Divide</button>
						<button type='button' onClick={Times}>Multipy</button>
						<button type='button' onClick={Minus}>Substract</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default App
