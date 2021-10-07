module.exports = {
	...jest.requireActual('../Index'),
	__esModule: true,
	// TODO: update return value for Redux / context implementation
	getSecretWord: jest.fn().mockReturnValue(Promise.resolve('party')),
};
