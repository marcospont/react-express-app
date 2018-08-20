import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
	palette: {
		primary: blue,
		secondary: {
			main: '#304ffe'
		}
	},
	overrides: {
		MuiNativeSelect: {
			root: {
				'&:hover :before': {
					border: 0
				}
			},
			select: {
				border: '1px solid #ccc',
				paddingLeft: 10,
				width: 'calc(100% - 43px)'
			}
		}
	}
});

export default theme;
