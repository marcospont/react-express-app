import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import TitlePane from '../title-pane/title-pane';
import ProfileStore from '../../stores/profile-store';

@inject('profileStore')
@observer
class ProfileForm extends React.Component {
	getInputValue(name) {
		const { profileStore } = this.props;

		return profileStore.selections.inputValues.get(name) || '';
	}

	setInputValue(name, value) {
		const { profileStore } = this.props;

		profileStore.setInputValue(name, value);
	}

	renderInputs() {
		const { profileStore } = this.props;

		return profileStore.inputs.map((input, i) => (
			<Grid item xs={4}>
				<FormControl>
					<InputLabel shrink>{input.label}</InputLabel>
					<Input value={this.getInputValue(input.name)} onChange={e => this.setInputValue(input.name, e.target.value)} />
				</FormControl>
			</Grid>
		));
	}

	render() {
		return (
			<TitlePane title="Profile">
				<Grid container spacing={24}>
					{this.renderInputs()}
				</Grid>
			</TitlePane>
		);
	}
}

ProfileForm.propTypes = {
	profileStore: PropTypes.instanceOf(ProfileStore)
};

export default ProfileForm;
