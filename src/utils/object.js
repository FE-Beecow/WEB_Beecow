import _isEmpty from 'lodash/isEmpty';

export function isEmpty(obj) {
	return _isEmpty(obj);
}

export function isNotEmpty(obj) {
	return !isEmpty(obj);
}

export function isEmptyModel(obj) {
	if (isEmpty(obj) === false || obj === '') {
		return true;
	}
	return false;
}
