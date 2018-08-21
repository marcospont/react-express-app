import { observable, action } from 'mobx';

export default class ProfileStore {
	inputs = [{ name: 'foo', label: 'Foo' }, { name: 'bar', label: 'Bar' }];

	@observable
	selections = {
		profile: '',
		inputValues: new Map()
	};

	constructor() {
		this.resetInputValues();
	}

	@action
	setInputValue(name, value) {
		if (this.findInput(name)) {
			this.selections.inputValues.set(name, value);
		}
	}

	@action
	reset() {
		this.resetInputValues();
	}

	resetInputValues() {
		this.inputs.forEach(input => {
			this.selections.inputValues.set(input.name, '');
		});
	}

	findInput(name) {
		const result = this.inputs.filter(input => input.name === name);

		return result.length > 0 ? result : null;
	}
}
