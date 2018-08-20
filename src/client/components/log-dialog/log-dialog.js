import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
	listItem: {
		width: 300,
		padding: 5
	}
};

@withStyles(styles)
class LogDialog extends React.Component {
	render() {
		const { classes } = this.props;
		const content = this.props.messages.map((message, i) => (
			<ListItem className={classes.listItem} key={i}>
				<ListItemText>{message}</ListItemText>
			</ListItem>
		));
		return (
			<Dialog open={this.props.open} onClose={this.props.onClose}>
				<DialogTitle>Logs</DialogTitle>
				<DialogContent>
					<List dense>{content}</List>
				</DialogContent>
			</Dialog>
		);
	}
}

LogDialog.propTypes = {
	messages: PropTypes.arrayOf(PropTypes.string).isRequired,
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired
};

export default LogDialog;
