import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import { Provider } from 'mobx-react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import stores from './stores';
import theme from './config/mui-theme';
import faviconImage from './assets/images/favicon.png';

import App from './components/app';

ReactDOM.render(
	<Provider {...stores}>
		<MuiThemeProvider theme={theme}>
			<Favicon url={faviconImage} />
			<App />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);
