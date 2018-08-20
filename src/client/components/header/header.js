import React from 'react';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import LogViewer from '../log-viewer/log-viewer';

const Header = () => (
	<Grid container direction="row" justify="space-between" alignItems="center">
		<Grid item>
			<Typography variant="display1">Title</Typography>
		</Grid>
		<Grid item>
			<LogViewer />
		</Grid>
	</Grid>
);

export default Header;
