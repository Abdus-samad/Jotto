import moxios from 'moxios';
import { getSecretWord } from './Index';

describe('getSecretWord', () => {
	beforeEach(() => {
		moxios.install();
	});
	afterEach(() => {
		moxios.uninstall();
	});
	test('secretWord is return', () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: 'party',
			});
		});
		// Update to test app in redux / context sections
		return getSecretWord().then((sercetWord) => {
			expect(sercetWord).toBe('party');
		});
	});
});
