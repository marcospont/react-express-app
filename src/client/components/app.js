import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Header from './header/header';
import TitlePane from './title-pane/title-pane';
import ContextForm from './context-form/context-form';

const styles = {
	root: {
		margin: '50px 100px'
	}
};

@withStyles(styles)
class App extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Header />
				<ContextForm />
				<TitlePane title="Profile">Profile</TitlePane>
			</div>
		);
	}
}

export default App;
