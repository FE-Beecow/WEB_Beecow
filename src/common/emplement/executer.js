export const rule = (field, name, ...validations) => {
	return (state) => {
		for (let v of validations) {
			let errorMessageFunc = v(state[field], state);
			if (errorMessageFunc) {
				return {[field]: errorMessageFunc(name)};
			}
		}
		return null;
	};
};

export const validate = (state, runners) => {
	return runners.reduce((memo, runner) => {
		return Object.assign(memo, runner(state));
	}, {});
};
