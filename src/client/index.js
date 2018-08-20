import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from './config/mui-theme';
import faviconImage from './assets/images/favicon.png';

import App from './components/app';

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<Favicon url={faviconImage} />
		<App />
	</MuiThemeProvider>,
	document.getElementById('root')
);
