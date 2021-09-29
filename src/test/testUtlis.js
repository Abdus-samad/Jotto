/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {String} val -Value of data-test attribute fors earch
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test='${val}']`);
};
