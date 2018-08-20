import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = {
	root: {
		margin: '20px 0 30px 0'
	},
	title: {
		margin: '15px 0'
	},
	body: {
		padding: 20
	}
};

@withStyles(styles)
class TitlePane extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<Typography variant="headline" className={classes.title}>
					{this.props.title}
				</Typography>
				<Paper elevation={5} className={classes.body}>
					{this.props.children}
				</Paper>
			</div>
		);
	}
}

TitlePane.propTypes = {
	title: PropTypes.string.isRequired
};

export default TitlePane;
