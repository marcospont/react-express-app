import React from 'react';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';

import LogDialog from '../log-dialog/log-dialog';

class LogViewer extends React.Component {
	state = {
		dialogOpen: false,
		messages: ['Message 1', 'Message 2', 'Message 3', 'Message 4', 'Message 5', 'Message 6']
	};

	handleDialogOpen = () => {
		this.setState({
			dialogOpen: true
		});
	};

	handleDialogClose = () => {
		this.setState({
			dialogOpen: false
		});
	};

	render() {
		return (
			<div>
				<Badge badgeContent={this.state.messages.length} color="secondary">
					<Button variant="contained" color="primary" onClick={this.handleDialogOpen}>
						Logs
					</Button>
				</Badge>
				<LogDialog messages={this.state.messages} open={this.state.dialogOpen} onClose={this.handleDialogClose} />
			</div>
		);
	}
}

export default LogViewer;
