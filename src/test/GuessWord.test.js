import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { findByTestAttr } from '../test/testUtlis';

/**
 * Create wrapper with specified initail conditions,
 * then submit a guessed word 'train'
 * @function
 *
 * @param {object}  state - InitialCondition
 * @returns {Wrapper} - Enzyme Wrappert of mounted App
 */

const setup = (state = {}) => {
	// TODO: apply state
	const wrapper = mount(<App />);
	// add value to input box
	const inputBox = findByTestAttr(wrapper, 'input-box');
	inputBox.simulate('change', { target: { value: 'train' } });
	// simulate click on submit button
	const submitButton = findByTestAttr(wrapper, 'submit-button');
	submitButton.simulate('click', { preventDefault() {} });
	return wrapper;
};
describe.skip('no word guessed', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({
			sercetWord: 'party',
			success: false,
			guessedWords: [],
		});
	});
	test('create GuessedWords table with one row', () => {
		const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
		expect(guessedWordRows).toHaveLength(1);
	});
});
describe.skip('some word guessed', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({
			secretWord: 'party',
			success: false,
			guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
		});
	});

	test('add row to guessedWords table', () => {
		const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
		expect(guessedWordNodes).toHaveLength(2);
	});
});
describe.skip('guessed secret word', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({
			sercetWord: 'party',
			success: false,
			guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
		});
		// Add value to input box
		const inputBox = findByTestAttr(wrapper, 'input-box');
		const mockEvent = { target: { value: 'party' } };
		inputBox.simulate('change', mockEvent);
		// simulate click on submit button
		const submitButton = findByTestAttr(wrapper, 'submit-button');
		submitButton.simulate('click', { preventDefault() {} });
	});

	test('add row to guessedWords table', () => {
		const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
		expect(guessedWordNodes).toHaveLength(3);
	});
	test('displays congrats component', () => {
		const congrats = findByTestAttr(wrapper, 'component-congrats');
		expect(congrats.text().length).toBeGreaterThan(0);
	});
	test('does not display input component contents', () => {
		// const inputBox = findByTestAttr(wrapper, 'input-box');
		// expect(inputBox.exists()).toBe(false);

		// const submitButton = findByTestAttr(wrapper, 'submit-button');
		// expect(submitButton.exists()).toBe(false);
		const input = findByTestAttr(wrapper, 'component-input');
		expect(input.text().length).toBe(0);
	});
});
