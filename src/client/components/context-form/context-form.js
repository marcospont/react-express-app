import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

import TitlePane from '../title-pane/title-pane';

const styles = {
	select: {
		width: 250,
		'&:hover:before': {
			borderBottom: 'none !important'
		},
		'&:after': {
			borderBottom: 'none !important'
		}
	}
};

@withStyles(styles)
class ContextForm extends React.Component {
	data = {
		products: ['WFN', 'Vantage'],
		product: undefined,
		environments: ['DIT', 'FIT'],
		environment: undefined
	};

	renderProducts() {
		return this.data.products.map((product, i) => (
			<option key={i} value={product}>
				{product}
			</option>
		));
	}

	onChangeProduct = e => {
		this.data.product = e.target.value;
	};

	renderEnvironments() {
		return this.data.environments.map((environment, i) => (
			<option key={i} value={environment}>
				{environment}
			</option>
		));
	}

	onChangeEnvironment = e => {
		this.data.environment = e.target.value;
	};

	render() {
		const { classes } = this.props;

		return (
			<TitlePane title="Context">
				<Grid container spacing={24}>
					<Grid item>
						<FormControl>
							<InputLabel shrink>Product</InputLabel>
							<NativeSelect value={this.data.product} onChange={this.onChangeProduct} className={classes.select}>
								<option value="" />
								{this.renderProducts()}
							</NativeSelect>
						</FormControl>
					</Grid>
					<Grid item>
						<FormControl>
							<InputLabel shrink>Environment</InputLabel>
							<NativeSelect value={this.data.environment} onChange={this.onChangeEnvironment} className={classes.select}>
								<option value="" />
								{this.renderEnvironments()}
							</NativeSelect>
						</FormControl>
					</Grid>
				</Grid>
			</TitlePane>
		);
	}
}

export default ContextForm;
